import React, {useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./SignaturePad.css";

export default function SignaturePad() {
  const signatureRef = useRef();
  const [signatureUrl, setSignatureUrl] = useState('');
  // const thereIsASignature = useMemo(() => {
  //   console.log('usememo: ', signatureRef.current)
  //   if(signatureRef.current?.isEmpty() == undefined){
  //     return true;
  //   }
  //   return signatureRef.current?.isEmpty();
  // },[signatureRef.current]);
  
  const handleClear = () => {
    console.log(signatureRef.current)
    console.log(signatureRef.current.isEmpty())
    signatureRef.current?.clear();
    setSignatureUrl('');
  };

  const handleSave = () => {
    console.log(signatureRef.current.isEmpty())
    if(!signatureRef.current?.isEmpty()){

      let sign = signatureRef.current.getTrimmedCanvas();
      setSignatureUrl(sign.toDataURL('image/png'));
      console.log('Signature URL: ',sign.toDataURL())
    }
  };
  
  return (
    <>
      <section className="signature-container">
        <div>
          {/* <div style={{height: "20rem",border: "2px solid #777", marginBottom: "1rem",width: "100%"}} */}
          <div style={{padding: "0 10px 10px",border: "2px solid #777", marginBottom: "1rem"}}>
            <SignatureCanvas
              canvasProps={{ className: "sigCanvas" }}
              ref={signatureRef}
            />
          </div>
          <div className="button-group">
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleSave}>Save</button>
            {/* <button onClick={handleSave} disabled={thereIsASignature} className={thereIsASignature ? 'disabled-btn' : ''}>Save</button> */}
          </div>
        </div>
        <div className="rendering">
          {signatureUrl ? <img src={signatureUrl} alt="image signature" className="signature" /> : <p>Make a signature to the left!</p>}
        </div>
      </section>
    </>
  );
}

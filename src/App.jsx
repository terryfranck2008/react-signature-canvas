
import './App.css';
import isMobile from 'ismobilejs';
import SignaturePad from './SignaturePad/SignaturePad';


function is_touch_enabled() {
  return ( 'ontouchstart' in window ) ||
         ( navigator.maxTouchPoints > 0 ) ||
         ( navigator.msMaxTouchPoints > 0 );
}

function fromBooleanToString(value){
  return value ? 'Yes'  : 'No';
}

export default function App() {

  const device = isMobile(window.navigator);
  console.log(device);

  return (
    <>
      <div className='container'>
        <div className='box-device'>
          <p>is device a touchscreen: <span className='bold'>{fromBooleanToString(is_touch_enabled())}</span></p>
          <p>phone device: <span className='bold'>{fromBooleanToString(device.phone)}</span></p>
          <p>tablet device: <span className='bold'>{fromBooleanToString(device.tablet)}</span></p>
        </div>
        {(is_touch_enabled() || device.tablet) && !device.phone ? <SignaturePad /> : <h2>The device does not have a touch screen</h2>}
      </div>
    </>
  )
}


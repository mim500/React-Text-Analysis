import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
  <>
  <Navbar title={"TextUtils"} aboutText="About US"/>
  {/* <Navbar/> */}
  <div className="container my-3">
    <TextForm heading="Enter Text For Analysis"/>
    {/* <About/> */}
  </div>
 
  </>
  );
}

export default App;

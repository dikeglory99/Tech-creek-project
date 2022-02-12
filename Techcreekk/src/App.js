import './App.css';
import toggle from "../src/components/assests/ic_nav_toggle.svg";
import backgroundImage from "../src/components/assests/background-img.png"
import bgland from "../src/components/assests/bg-land.svg";
import Top from "./components/Top";
import creeklogo from "../src/components/assests/logo-white.png";
import Icons from './components/Icons';
import ContactIcon from './components/ContactIcon';
import QuoteIcon from './components/Quoteicon';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className='showcase'>
      <div className='left__container'>
        <a className='img_box' href="#"><img src={toggle} alt=""/></a>
        <div className='container' style={{backgroundImage: `url(${backgroundImage})`}}>
        <a className='tech__logo' href="#"><img src={creeklogo} alt=""/></a>
         <div className='empty__container'></div>
          <p className='tech__text'>A <br/>
            habitat <br/>
            for <br/>
             creativity</p>
            <Sidebar/>
        </div>
      </div>



      <div className='right__container' style={{backgroundImage: `url(${bgland})`}}>
        <Top/>
        <QuoteIcon/>
      <div className="right__con">
            <p className="right__text__title">welcome <br />
            to the &#60; creek/&#62; </p>
            <p className="right__text__para">TechCreek is a habitat for the teeming population of youths making sense of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State.</p>
            <Icons/>
          </div>
          <ContactIcon />
      </div>
        
  


    </div>
   
    
  );
}

export default App;

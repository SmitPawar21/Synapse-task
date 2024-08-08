import './App.css';
import logo from "./images/mobilelo 2.png";
import image1 from "./images/image 16.png";
import { Section_2 } from "./Section_2";
import { Companies } from "./Companies";
import { Section_3 } from "./Section_3";
import { Section_4 } from './Section_4';
import { Section_5 } from './Section_5';
import call from "./images/call.png";
import menu from "./images/menu.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section_1 />
      <div className='whitebox'></div> {/* used as filter for background of section 1 */}
      <Search_section />
      <Section_2 />
      <div className='view_all'> view all </div>
      <Companies />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <div className='foot'> &copy; Copyright 2024 </div>
    </div>
  );
}

/* NAV BAR */
const Navbar = () => {
  return (
    <div className='nav'>
      <div className='navtop'></div>
      <div className='navbottom'>
        <span> <img src={logo} /> </span>
        <ul>
          <li> Home </li>
          <li> About Us </li>
          <li> Customer Support </li>
          <li> Explore More </li>
        </ul>

        <div className='call'>
          <button> Contact Us </button>
          <button className='res_but'>
            <img src={call} />
          </button>
          <span className='lines'>
            <img src={menu} />
          </span>
        </div>


      </div>
    </div>
  );
}

const Section_1 = () => {
  return (
    <div className='section_1'>
      <h1>Your Destination for Cutting-Edge Mobile Devices</h1>
      <img src={image1} />
    </div>
  );
}

const Search_section = () => {
  return (
    <div className='searchSection'>

      <div className='element'>
        <label for="price"> Price Range </label>
        <select name="price" id="price">
          {/* options for price range */}
        </select>
      </div>


      <div className='element'>
        <label for="brand"> Brands </label>
        <select name="brand" id="brand">
          {/* options for price range */}
        </select>
      </div>


      <div className='element'>
        <label for="feature"> Features </label>
        <select name="feature" id="feature">
          {/* options for price range */}
        </select>
      </div>


      <button> Search </button>
    </div>
  );
}

export default App;

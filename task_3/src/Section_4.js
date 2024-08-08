import android from "./images/android.png";
import storage from "./images/storage.png";
import display from "./images/large_display.png";
import battery from "./images/battery (2).png";
import recording from "./images/recording.png";
import ram from "./images/ram.png";
import camera from "./images/camera (2).png";
import pen_support from "./images/pen_support.png";
import sidebar_image from "./images/sidebarImg.png";

export const Section_4 = ()=>{
    return (
        <div className="section_4">
            <div className="sidebar">
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>

            <div className="sec4_hero">
                <h1>Find with price range</h1>
                <div className="grid_area">
                    <div className="grid_item1"> <p>Under 30,000</p> </div>
                    <div className="grid_item2"> <p>Under 10,000</p> </div>
                    <div className="grid_item3"> <p>Under 50,000</p> </div>
                    <div className="grid_item4"> <p>Under 20,000</p> </div>
                    <div className="grid_item5"> <p>Under 40,000</p> </div>
                </div>
                <h1>Find With Popular Features</h1>
                <div className="features">
                    <Item image={android} name="Android" />
                    <Item image={storage} name="Storage" />
                    <Item image={display} name="Large display" />
                    <Item image={battery} name="Wireless charging" />
                    <Item image={recording} name="4K recording" />
                    <Item image={ram} name="Ram" />
                    <Item image={camera} name="Cameras" />
                    <Item image={pen_support} name="S Pen Support" />
                </div>
            </div>
        </div>
    );
}
const CardItem = ()=>{
    return (
        <div className="card_item">
            <img src={sidebar_image} />
            <h3> lorem hgydi hhs </h3>
        </div>
    );
}
const Item = (props)=>{
    return (
        <div className="item">
            <img src={props.image} />
            <h4> {props.name} </h4>
        </div>
    );
}
import battery from "./images/battery.png";
import brand from "./images/brand.png";
import display from "./images/display.png";
import memory from "./images/memory.png";
import camera from "./images/camera.png";
import smart_phone_1 from "./images/smart_phone_1.png";
import smart_phone_2 from "./images/smart_phone_2.png";

export const Section_3 = ()=>{
    return (
        <div className="section_3">
            <h1>Lorem ispum jgdu kjbkwm</h1>
            <div className="sec3_hero">
                <div className="lists">
                    <List image={battery} title="Battery" />
                    <List image={camera} title="Camera" />
                    <List image={memory} title="Memory" />
                    <List image={display} title="Display" />
                    <List image={brand} title="Brand" />
                </div>

                <div className="image_box">
                    <img src={smart_phone_1} />
                    <img src={smart_phone_2} />
                </div>

                <div className="info">
                    <div>
                        <h1>title lorem redjh cins</h1>
                        <p>gywusj dgeywujs yueiwjsd ui</p>
                        <p>gywusj dgeywujs yueiwjsd ui</p>
                        <p>gywusj dgeywujs yueiwjsd ui</p>
                    </div>
                    <div>
                        <h1>title lorem redjh cins</h1>
                        <p>gywusj dgeywujs yueiwjsd ui</p>
                        <p>gywusj dgeywujs yueiwjsd ui</p>
                        <p>gywusj dgeywujs yueiwjsd ui</p>
                    </div>
                    <button> Order Now </button>
                </div>
            </div>
        </div>
    );
}

const List = (props)=>{
    return (
        <div className="list_item">
            <img src={props.image} />
            <div>
            <h2> {props.title} </h2>
            <p>Lorem hsig iuygck kjcns</p>
            </div>
        </div>
    );
}
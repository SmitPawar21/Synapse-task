import logo from "./images/logo (2).png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import insta from "./images/insta.png";
import call from "./images/call.png";

export const Section_5 = ()=>{
    return (
        <div className="section_5">
            <div className="part_1">
                <img src={logo} />
                <h2>New Mobile Phones</h2>
                <table>
                    <tr>
                        <td>Galaxy A15</td>
                        <td>MI</td>
                        <td>Oppo</td>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>Techno</td>
                        <td>Techno</td>
                    </tr>
                    <tr>
                        <td>Vivo</td>
                        <td>Lenovo</td>
                        <td>Huawei</td>
                    </tr>
                    <tr>
                        <td>Samsung</td>
                        <td>Realme</td>
                        <td>Realme</td>
                    </tr>
                </table>
            </div>

            <div className="part_2">
                <h2> More Information </h2>
                <ul>
                    <li>1. <a>Customer Support</a> </li>
                    <li>2. <a>About Us</a> </li>
                    <li>3. <a>Contact Us</a> </li>
                    <li>4. <a>E-mail Support</a> </li>
                    <li>5. <a>Community</a> </li>
                    <li>6. <a>Give Feedback</a> </li>
                    <li>7. <a>Service & Warranty</a> </li>
                </ul>
            </div>

            <div className="part_3">
                <div className="icons">
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={insta} />
                </div>
                <div className="card_footer">
                    <p>Contact Us Immediately To Recieve Further Details</p>
                    <span>
                        <img src={call} />
                    </span>
                </div>
            </div>
        </div>
    );
}
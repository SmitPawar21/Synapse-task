import star from "./images/star.png";
import call from "./images/call.png";

export const Card = (props)=>{
    return (
        <div className="card">
            <div className="photo_mobile">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <img src={props.image} />
            </div>
            <h2> Mobile Name </h2>
            <div className="price_rating">
                <h1> Rs. 32,799.00 </h1>
                <span>
                    <img src={star} /> <h1>4.5</h1>
                </span>
            </div>
            <ul>
                <li>abcd efgh ijk lmno pq rstu</li>
                <li>abcd efgh ijk lmno pq rstu</li>
                <li>abcd efgh ijk lmno pq rstu</li>
                <li>abcd efgh ijk lmno pq rstu</li>
            </ul>
            <div className="order">
                <button> Order Now </button>
                <span> 
                    <img src={call} />
                </span>
            </div>
        </div>
    );
}
import "../Styles/ratingcard.css";
import {AiFillStar} from "react-icons/ai"

function RatingCard (){
    return(
        <div className="rating-card">
            <AiFillStar className="star"/>
        <h1> How did we do?</h1>
        <p>Please let us know how we did with yor support request. All the feedback is appreciatedd to help us improve our offering!</p>
        <div className="btn-div">

        <button className="rating-btn">1</button>
        <button className="rating-btn">2</button>
        <button className="rating-btn">3</button>
        <button className="rating-btn">4</button>
        <button className="rating-btn">5</button>
        </div>


        <button className="submit-btn">Submit</button>
        </div>
         );
}

export default RatingCard;
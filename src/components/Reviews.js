import { Fragment } from "react";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
    return (
        <Fragment>
            <div><h1>Reviews</h1></div>
            <ReviewItem title="01/11/2023 - Thomas Hankins">
                <p>I really liked this gig, it was a lot of fun</p>
            </ReviewItem>
            <ReviewItem title="01/11/2023 - George Keen">
                <p>I really liked this gig, it was a lot of fun</p>
            </ReviewItem>
            <ReviewItem title="01/11/2023 - Geroge Hewett">
                <p>I really liked this gig, it was a lot of fun</p>
            </ReviewItem>
            <ReviewItem title="01/11/2023 - Mystery Shopper">
                <p>I liked this gig, it was fun</p>
            </ReviewItem>
        </Fragment>
    )
}

export default Reviews;
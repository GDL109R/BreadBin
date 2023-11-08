import { Fragment } from "react";
import ReviewItem from "./ReviewItem";

const revs = [
    {
        date: "01/11/2023",
        name: "Thomas Hankins",
        reviewMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        date: "01/11/2023",
        name: "George Hewett",
        reviewMessage: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        date: "01/11/2023",
        name: "George Keen",
        reviewMessage: "This was the best gig I have ever been to, apart from the Spice Girls"
    }
];


const Reviews = () => {
    return (
         <Fragment>
            <div><h1>Reviews</h1></div>

            {revs.map((rev) => (
                <ReviewItem
                    key={rev.date + rev.name}
                    title={rev.date + " - " + rev.name}
                    reviewMessage={rev.reviewMessage}
                />
            ))}
        </Fragment>


    )
}

export default Reviews;

/*

        <Fragment>
            <div><h1>Reviews</h1></div>

            {revs.map((rev) => (
                <ReviewItem title={rev.date + " - " + rev.name }
            ))}

            <ReviewItem title="01/11/2023 - Thomas Hankins">
                <p>I really liked this gig, it was a lot of fun</p>
            </ReviewItem>
            <ReviewItem title="01/11/2023 - George Keen">
                <p>I really liked this gig, it was a lot of fun</p>
            </ReviewItem>
            <ReviewItem title="01/11/2023 - George Hewett">
                <p>I really liked this gig, it was a lot of fun</p>
            </ReviewItem>
            <ReviewItem title="01/11/2023 - Mystery Shopper">
                <p>I liked this gig, it was fun</p>
            </ReviewItem>
        </Fragment>
*/
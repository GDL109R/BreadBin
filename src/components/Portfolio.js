import { Fragment } from "react";
import Bands from "./Bands";
import Gigs from "./Gigs";
import Venues from "./Venues";

const Portfolio = () => {
    return (
        <Fragment>
            <Gigs />
            <Venues />
            <Bands />
        </Fragment>
    )
}

export default Portfolio;
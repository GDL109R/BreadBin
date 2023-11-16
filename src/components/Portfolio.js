import { Fragment, useState } from "react";
import Bands from "./Bands";
import Gigs from "./Gigs";
import Venues from "./Venues";




const Portfolio = () => {
    const [curPage, setCurPage] = useState("Gigs");

    const handleClick = (page) => {
        console.log(curPage);
        setCurPage(page);
    }
    return (
        <Fragment>
            <div className="container" style={{padding: "40px"}}>
                <div className="row">
                    <div className="col-4 d-flex justify-content-center">
                        <button onClick={() => handleClick("Gigs")} className="btn btn-primary" style={{minWidth: "150px"}}>
                            <strong>Gigs</strong>
                        </button>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <button onClick={() => handleClick("Venues")} className="btn btn-primary" style={{ minWidth: "150px" }}>
                            <strong>Venues</strong>
                        </button>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <button onClick={() => handleClick("Bands")} className="btn btn-primary" style={{ minWidth: "150px" }}>
                            <strong>Clients/Bands</strong>
                        </button>
                    </div>
                </div>
            </div>
            {curPage === "Gigs" && <Gigs />}
            {curPage === "Venues" && <Venues />}
            {curPage === "Bands" && <Bands />}
        </Fragment>
    )
}

export default Portfolio;
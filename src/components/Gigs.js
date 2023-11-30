import { Fragment } from "react";
import ImageCarousel from "./ImageCarousel";


const Gigs = () => {

    const imageUrls = [
        '/Images/Cat0.png',
        '/Images/Cat1.png',
        '/Images/Cat2.png',
    ]

    //<img src={require("../Images/Cat0.png")} alt="Liv" className={styles['pfpImgStyle']} />
    return (
        <Fragment>
            <div><h1 style={{ paddingBottom: "5px", textAlign: "center" }}>Gigs</h1></div>
            <div className="container-fluid border" style={{ padding: "10px" }}>
                <h1>Gigs</h1>
                <div className="row">
                    <div className="col-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="col-5">
                        <ImageCarousel images={imageUrls} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Gigs;
import { Fragment } from "react";
import styles from "../TeamStyles.module.css";

const Gigs = () => {
    return (
        <Fragment>

            <div className="container-fluid border">
                <h1>Gigs</h1>
                <div className="row">
                    <div className="col-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="col-5">
                        <img src={require("../PFPs/Cat0.png")} alt="Liv" className={styles['pfpImgStyle']} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Gigs;
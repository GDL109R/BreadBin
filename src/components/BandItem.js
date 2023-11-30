import styles from "../PortfolioSection.module.css";

export default ({ title, bandMessage, image1Loc, image2Loc = false }) => {
    return (
        <div className="container-fluid border" style={{ padding: "10px" }}>
            <div className="row">
                <div className="col-6">
                    <h1>{title}</h1>
                    {bandMessage}
                </div>
                <div className="col-3 square-box">
                    <img src={require("../Images/Cat3.png")} alt={title} className={styles['imgStyle']} />
                </div>

                <div className="col-3">
                <img src={require("../Images/Cat6.png")} alt={title} className={styles['imgStyle']} />
                </div>
            </div>
        </div>
    )
}


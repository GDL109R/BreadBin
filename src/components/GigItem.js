import styles from "../PortfolioSection.module.css";
import ImageCarousel from "./ImageCarousel";

export default ({ title, gigMessage, images = false }) => {
    return (
        <div className="container-fluid border" style={{ padding: "10px" }}>
            <div className="row">
                <div className="col-9">
                    <h1>{title}</h1>
                    {gigMessage}
                </div>
                <div className="col-3">
                    <ImageCarousel images={images} />
                </div>
            </div>
        </div>
    )
}


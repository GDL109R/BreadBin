import styles from "../PortfolioSection.module.css";
import GoogleMapComponent from "./GoogleMapComponent";

export default ({ title, venueMessage, imageLoc, Lat, Lon = false }) => {
    return (
        <div className="container-fluid border" style={{ padding: "10px" }}>
            <div className="row">
                <div className="col-6">
                    <h1>{title}</h1>
                    {venueMessage}
                </div>
                <div className="col-3 square-box">
                    <img src={imageLoc} alt={title} className={styles['imgStyle']} />
                </div>

                <div className="col-3">
                    {Lat && Lon && (
                        <GoogleMapComponent lat={Lat} lng={Lon} />
                    )}
                    {/*<div className={styles['boxStyle']}>Lat: {Lat}<br />Lon: {Lon}</div>*/}
                </div>
            </div>
        </div>
    )
}


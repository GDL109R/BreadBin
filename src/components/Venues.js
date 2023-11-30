import { Fragment } from "react";
import VenueItem from "./VenueItem";

const vens = [
    {
        name: "The O2 Arena",
        venueMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageLoc: "/Images/Cat8.png",
        Lat: "0",
        Lon: "0"
    },
    {
        name: "Wembley Stadium",
        venueMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageLoc: "/Images/Cat4.png",
        Lat: "0",
        Lon: "0"
    },
    {
        name: "My House",
        venueMessage: "In the middle of my street",
        imageLoc: "/Images/Cat5.png",
        Lat: "42",
        Lon: "24"
    },
];

const Venues = () => {
    return (
        <Fragment>
            <div><h1 style={{ paddingBottom: "5px", textAlign: "center" }}>Venues</h1></div>

            {vens.map((ven) => (
                <VenueItem
                    key={ven.name}
                    title={ven.name}
                    venueMessage={ven.venueMessage}
                    imageLoc={ven.imageLoc}
                    Lat={ven.Lat}
                    Lon={ven.Lon}
                />
            ))}
        </Fragment>
    )
}

export default Venues;
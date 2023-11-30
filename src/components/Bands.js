import { Fragment } from "react";
import BandItem from "./BandItem";

const bans = [
    {
        name: "S Club 7",
        bandMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image1Loc: "/Images/Cat0.png",
        image2Loc: "/Images/Cat1.png",
    },
    {
        name: "The White Stripes",
        bandMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image1Loc: "/Images/Cat2.png",
        image2Loc: "/Images/Cat3.png",
    },
    {
        name: "The other band",
        bandMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image1Loc: "/Images/Cat4.png",
        image2Loc: "/Images/Cat5.png",
    },
];

const Bands = () => {
    return (
        <Fragment>
            <div><h1 style={{ paddingBottom: "5px", textAlign: "center" }}>Clients and Bands</h1></div>

            {bans.map((ban) => (
                <BandItem
                    key={ban.name}
                    title={ban.name}
                    bandMessage={ban.bandMessage}
                    image1Loc={ban.image1Loc}
                    image2Loc={ban.image2Loc}
                />
            ))}
        </Fragment>
    )
}

export default Bands;
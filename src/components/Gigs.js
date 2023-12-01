import { Fragment } from "react";
import GigItem from "./GigItem";
import ImageCarousel from "./ImageCarousel";

const gis = [
    {
        name: "The O2 Arena",
        gigMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ['/Images/Cat0.png', '/Images/Cat1.png', '/Images/Cat2.png']
    },
    {
        name: "The O2 Arena",
        gigMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ['/Images/Cat3.png', '/Images/Cat4.png', '/Images/Cat5.png']
    },
    {
        name: "The O2 Arena",
        gigMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ['/Images/Cat6.png', '/Images/Cat7.png', '/Images/Cat8.png', '/Images/Cat9.png']
    },
];

const Gigs = () => {

    return (
        <Fragment>
            <div><h1 style={{ paddingBottom: "5px", textAlign: "center" }}>Gigs</h1></div>
            {gis.map((gi) => (
                <GigItem
                    key={gi.name}
                    title={gi.name}
                    gigMessage={gi.gigMessage}
                    images={gi.images}
                />
            ))}
        </Fragment>
    )
}

export default Gigs;
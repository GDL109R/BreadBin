import { Fragment } from "react";
import React, { useState } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "../HomeStyles.module.css";

const Home = () => {
    const [rotateClass, setRotateClass] = useState('');

    const randomRotation = () => {
        const randomNumber = Math.random() * 100; // Scale random number to 0-100 range

        // 1% chance for flipping 180 degrees
        if (randomNumber < 1) {
            setRotateClass(styles.rotateEaster);
            return;
        }

        // 49.5% chance for clockwise rotation
        if (randomNumber < 50) {
            setRotateClass(styles.rotateClockwise);
        } else {
            setRotateClass(styles.rotateCounterClockwise); // 49.5% chance for counter-clockwise rotation
        }
    };

    const resetRotation = () => {
        setRotateClass('');
    };

    return (
        <Fragment>
            <div className={styles['backgroundImage']}>
                <div className="container">
                    <div className={styles['logoRow']}>
                        <div className={styles['logoCol']}>
                            <div className={styles['logoStyle']}>BreadBinProduction</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <NavLink tag={Link} to="/portfolio">
                                <div className={styles['boxStyle']}>
                                    <span className={styles['text-top']}>Portfolio</span>
                                    <span className={styles['text-bot']}>See out past work!</span>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            <NavLink tag={Link} to="/reviews">
                                <div className={styles['boxStyle']}>
                                    <span className={styles['text-top']}>Gig Reviews</span>
                                    <span className={styles['text-bot']}>+ more</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.container}>
                                <img src={require("../Images/Drum.png")} alt="logo" className={`${styles.drumImgStyle} ${rotateClass}`} onMouseEnter={randomRotation} onMouseLeave={resetRotation} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <NavLink tag={Link} to="/meet-the-team">
                                <div className={styles['boxStyle']}>
                                    <span className={styles['text-top']}>The Team</span>
                                    <span className={styles['text-bot']}>Meet the chaps behind BBP!</span>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            <NavLink tag={Link} to="/contact">
                                <div className={styles['boxStyle']}>
                                    <span className={styles['text-top']}>Contact Us</span>
                                    <span className={styles['text-bot']}>Get involved!</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
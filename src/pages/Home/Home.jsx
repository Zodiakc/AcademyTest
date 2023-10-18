import React, { useContext } from "react";
import Academy from "../../ui/Academy/Academy";
import Term from "../../ui/Term/Term";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import photo6 from "../../assets/photo6.png";
import photo7 from "../../assets/photo7.png";
import photo8 from "../../assets/photo8.png";
import VideoItem from "../../components/VideoItem/VideoItem";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { SliderContext } from "../../App";
import burger from "../../assets/burger.svg";
const Home = () => {
    const { slideId, setSlideId } = useContext(SliderContext);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Academy />
                    <ul className={styles.filterList}>
                        <li>All</li>
                        <li>Stocks</li>
                        <li>ETFs</li>
                        <li>Crypto</li>
                        <li>NFTs</li>
                    </ul>
                    <img src={burger} alt="burger" className={styles.burger} />
                </header>

                <Term header="New playlist" />
                <div className={styles.row}>
                    <Link
                        to="/slider"
                        className={styles.link}
                        onClick={() => setSlideId(1)}
                    >
                        <VideoItem source={photo1} />
                    </Link>
                    <Link
                        to="/slider"
                        className={styles.link}
                        onClick={() => setSlideId(2)}
                    >
                        <VideoItem source={photo2} />
                    </Link>
                    <Link
                        to="/slider"
                        className={styles.link}
                        onClick={() => setSlideId(3)}
                    >
                        <VideoItem source={photo3} />
                    </Link>
                    <Link
                        to="/slider"
                        className={styles.link}
                        onClick={() => setSlideId(4)}
                    >
                        <VideoItem source={photo4} />
                    </Link>
                </div>
                <Term header="Trending" />
                <div className={styles.row}>
                    <Link
                        to="/slider"
                        className={styles.link}
                        onClick={() => setSlideId(5)}
                    >
                        <VideoItem source={photo5} />
                    </Link>
                    <Link
                        to="/slider"
                        className={styles.link}
                        onClick={() => setSlideId(6)}
                    >
                        <VideoItem source={photo6} />
                    </Link>
                    <Link
                        to="/slider"
                        className={styles.link}
                        onClick={() => setSlideId(7)}
                    >
                        <VideoItem source={photo7} />
                    </Link>
                    <Link
                        to="/slider"
                        className={styles.link}
                        onClick={() => setSlideId(8)}
                    >
                        <VideoItem source={photo8} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

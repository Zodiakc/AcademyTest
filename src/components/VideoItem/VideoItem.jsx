import React from "react";
import styles from "./VideoItem.module.scss";
import Coin from "../../assets/Coins.svg";
const VideoItem = ({ source }) => {
    return (
        <div
            className={styles.item}
            style={{ backgroundImage: `url( ${source})` }}
        >
            <button>
                <img src={Coin} className={styles.coin} />
                <span>Earn 2T</span>
            </button>
            <p>Fundamental of investment</p>
        </div>
    );
};

export default VideoItem;

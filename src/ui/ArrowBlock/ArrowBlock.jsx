import React from "react";
import styles from "./ArrowBlock.module.scss";
import { useSwiper } from "swiper/react";
const ArrowBlock = () => {
    const swiper = useSwiper();
    return (
        <div
            className={styles.arrowsCirce}
            style={{
                maxWidth: "68px",
                maxHeight: "68px",
                borderRadius: "50%",
            }}
        >
            <div>
                <span
                    className={styles.prevArrow}
                    onClick={() => swiper.slidePrev()}
                >
                    &#60;
                </span>
                <span
                    className={styles.nextArrow}
                    onClick={() => swiper.slideNext()}
                >
                    &#62;
                </span>
            </div>
        </div>
    );
};

export default ArrowBlock;

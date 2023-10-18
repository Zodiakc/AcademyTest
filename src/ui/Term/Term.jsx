import React from "react";
import styles from "./Term.module.scss";
const Term = ({ header }) => {
    return (
        <div className={styles.term}>
            <h5>{header}</h5>
            <div className={styles.seeAll}>
                <span>See all</span>
                <span>&#62;</span>
            </div>
        </div>
    );
};

export default Term;

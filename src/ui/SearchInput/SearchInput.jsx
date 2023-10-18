import React from "react";
import styles from "./SearchInput.module.scss";
import search from "../../assets/Search.svg";
const SearchInput = () => {
    return (
        <div className={styles.inputWrapper}>
            <input placeholder="Search" className={styles.input}></input>
            <img className={styles.search} src={search}></img>
        </div>
    );
};

export default SearchInput;

import React from "react";
import styles from "./Sidebar.module.scss";
import notice from "../../assets/notice.svg";
import profile from "../../assets/mainProfile.svg";
import SearchInput from "../../ui/SearchInput/SearchInput";
import Menu from "../../ui/Menu/Menu";
import help from "../../assets/help.svg";
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.menuBlock}>
                <div className={styles.sidebarPhotos}>
                    <img src={notice} alt="notice" />
                    <img src={profile} alt="profile" />
                </div>
                <SearchInput />
                <Menu />
            </div>
            <div className={styles.helpBlock}>
                <img src={help} />
                <span>Help</span>
            </div>
        </div>
    );
};

export default Sidebar;

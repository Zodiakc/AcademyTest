import React from "react";
import styles from "./Menu.module.scss";
import home from "../../assets/Home.svg";
import play from "../../assets/Play.svg";
import community from "../../assets/Communiry.svg";
import imgStack from "../../assets/imgStack.svg";
const Menu = () => {
    return (
        <nav className={styles.nav}>
            <h3>MAIN</h3>
            <div className={styles.navBlock}>
                <div>
                    <img src={home} />
                    <span>Home</span>
                </div>
            </div>
            <div className={styles.navBlock}>
                <div>
                    <img src={play} />
                    <span>Watch</span>
                </div>
                <div className={styles.numBox}>2</div>
            </div>
            <div className={styles.navBlock}>
                <div>
                    <img src={community} />
                    <span>Community</span>
                </div>
                <div className={styles.imgBlock}>
                    <img src={imgStack}></img>
                </div>
            </div>
        </nav>
    );
};

export default Menu;

import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Layout;

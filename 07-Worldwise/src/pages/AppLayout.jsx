import React from "react";
import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";
import Sidebar from "../components/SideBar.jsx";
import Map from "../components/Map.jsx";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

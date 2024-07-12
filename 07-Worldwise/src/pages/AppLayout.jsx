import React from "react";
import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";
import Sidebar from "../components/SideBar.jsx";
import Map from "../components/Map.jsx";
import User from "../components/User.jsx";
import { useAuth } from "../../contexts/FakeAuthContext.jsx";
export default function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
}

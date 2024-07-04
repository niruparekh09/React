import React from "react";
import styles from "./SideBar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { Link, Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <Logo />
      </Link>
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by NRV Inc.
        </p>
      </footer>
    </div>
  );
}

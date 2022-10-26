import { useState } from "react";
import styles from "../../styles/components/MainContent.module.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LaunchesList from "../LaunchesList";
const MainContent = () => {
  const [sidebarShowing, setSidebarShowing] = useState(false);
  return (
    <>
      <Header
        sidebarShowing={sidebarShowing}
        setSidebarShowing={setSidebarShowing}
      />
      <div className={styles.main_grid}>
        <Sidebar
          sidebarShowing={sidebarShowing}
          setSidebarShowing={setSidebarShowing}
        />
        <LaunchesList />
      </div>
    </>
  );
};

export default MainContent;

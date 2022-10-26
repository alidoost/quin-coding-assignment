import styles from "../../styles/components/MainContent.module.scss";
import FilterForm from "../FilterForm";
const Sidebar = (props: {
  sidebarShowing: boolean;
  setSidebarShowing: Function;
}) => {
  return (
    <div
      className={`${styles.sidebar} ${
        props.sidebarShowing && styles.sidebar_show
      } `}
    >
      <FilterForm />
    </div>
  );
};

export default Sidebar;

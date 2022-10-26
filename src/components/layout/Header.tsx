import styles from "../../styles/components/Header.module.scss";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Header = (props: {
  sidebarShowing: boolean;
  setSidebarShowing: Function;
}) => {
  return (
    <header className={styles.header}>
      <div
        className={styles.bars}
        onClick={() => {
          props.setSidebarShowing(!props.sidebarShowing);
        }}
      >
        <Bars3Icon />
      </div>
      <div className={styles.logo}>Rocket Launches</div>
    </header>
  );
};

export default Header;

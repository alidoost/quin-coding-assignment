import styles from "../styles/components/MainContent.module.scss";
import { Launch } from "../types/launches";
const LaunchItem = (props: { launch: Launch }) => {
  const { launch } = props;
  return (
    <div className={styles.launch_item}>
      <div>
        Name: <span>{launch.name}</span>
      </div>
      <div>
        ID: <span>{launch.id}</span>
      </div>
      <div>
        Date: <span>{launch.date}</span>
      </div>
      <div>
        Status: <span>{launch.status.name}</span>
      </div>
      
    </div>
  );
};

export default LaunchItem;

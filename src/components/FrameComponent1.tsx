import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.dataDrivenInsightsWrapper}>
      <h2 className={styles.dataDrivenInsights}>Data-Driven Insights</h2>
    </div>
  );
};

export default FrameComponent;

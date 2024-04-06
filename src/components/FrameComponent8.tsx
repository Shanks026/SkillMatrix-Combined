import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.ellipseWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.adminHanSlanderHasChangedParent}>
          <div className={styles.adminHanSlanderContainer}>
            <b>Admin Han Slander</b>
            <span className={styles.span}>{` `}</span>
            <span
              className={styles.hasChangedYou}
            >{`has changed you role to `}</span>
            <b>Employee</b>
            <span className={styles.span1}>.</span>
          </div>
          <div className={styles.minAgo}>56 min ago</div>
        </div>
      </div>
      <div className={styles.deleteFill0Wght400Grad0OpsWrapper}>
        <img
          className={styles.deleteFill0Wght400Grad0OpsIcon}
          loading="lazy"
          alt=""
          src="/delete-fill0-wght400-grad0-opsz24-11.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent8;

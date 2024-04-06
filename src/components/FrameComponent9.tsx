import { FunctionComponent } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent9: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.ellipseWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.approvalMessage}>
        <div className={styles.adminJohnDoeHasApprovedYoParent}>
          <div className={styles.adminJohnDoeContainer}>
            <b>Admin John Doe</b>
            <span className={styles.span}>{` `}</span>
            <span className={styles.has}>{`has `}</span>
            <b>Approved</b>
            <span className={styles.yourSubmissio}> your submissio</span>
            <span>n</span>
            <span className={styles.span1}>{` `}</span>
            <span className={styles.on}>on</span>
            <b> Git/GitHub.</b>
          </div>
          <div className={styles.minAgo}>2 min ago</div>
        </div>
      </div>
      <div className={styles.folderIcon}>
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

export default FrameComponent9;

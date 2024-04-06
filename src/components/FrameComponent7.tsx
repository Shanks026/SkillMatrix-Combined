import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.ellipseWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.yourCertificateForGoogleClParent}>
          <div className={styles.yourCertificateForContainer}>
            <span
              className={styles.yourCertificateFor}
            >{`Your certificate for `}</span>
            <b>Google Cloud Storage</b>
            <span className={styles.hasBeenSubmitted}>
              {" "}
              has been submitted successfully.
            </span>
          </div>
          <div className={styles.dAgo}>2d ago</div>
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

export default FrameComponent7;

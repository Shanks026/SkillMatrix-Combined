import { FunctionComponent } from "react";
import EmailNotificationBox from "../components/EmailNotificationBox";
import styles from "./REGISTERPASS2.module.css";

const REGISTERPASS2: FunctionComponent = () => {
  return (
    <div className={styles.registerPass2}>
      <img className={styles.percOpIcon} alt="" src="/50perc-op.svg" />
      <header className={styles.logoParent}>
        <div className={styles.logo}>
          <img
            className={styles.torryHarrisIntegrationSolutIcon}
            loading="lazy"
            alt=""
            src="/torryharrisintegrationsolutionslogo-600-1@2x.png"
          />
        </div>
        <div className={styles.proficiencyMatrix}>
          <div className={styles.skillmatrix}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
            <img
              className={styles.vectorIcon5}
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
            <img
              className={styles.vectorIcon6}
              loading="lazy"
              alt=""
              src="/vector-6.svg"
            />
            <img
              className={styles.vectorIcon7}
              loading="lazy"
              alt=""
              src="/vector-7.svg"
            />
            <img
              className={styles.vectorIcon8}
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
            <img
              className={styles.vectorIcon9}
              loading="lazy"
              alt=""
              src="/vector-9.svg"
            />
            <img
              className={styles.vectorIcon10}
              loading="lazy"
              alt=""
              src="/vector-10.svg"
            />
          </div>
        </div>
      </header>
      <EmailNotificationBox />
    </div>
  );
};

export default REGISTERPASS2;

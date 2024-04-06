import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./REGISTER2.module.css";

const REGISTER2: FunctionComponent = () => {
  return (
    <div className={styles.register3}>
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
        <div className={styles.skillmatrixWrapper}>
          <div className={styles.skillmatrix}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector-5.svg" />
            <img className={styles.vectorIcon6} alt="" src="/vector-6.svg" />
            <img className={styles.vectorIcon7} alt="" src="/vector-7.svg" />
            <img className={styles.vectorIcon8} alt="" src="/vector-8.svg" />
            <img className={styles.vectorIcon9} alt="" src="/vector-9.svg" />
            <img className={styles.vectorIcon10} alt="" src="/vector-10.svg" />
          </div>
        </div>
      </header>
      <FrameComponent4 />
    </div>
  );
};

export default REGISTER2;

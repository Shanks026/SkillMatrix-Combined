import { FunctionComponent } from "react";
import InputArea from "../components/InputArea";
import styles from "./LOGIN.module.css";

const LOGIN: FunctionComponent = () => {
  return (
    <div className={styles.login3}>
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
              className={styles.errorFillGradient}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className={styles.errorFillGradient1}
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.errorFillGradient2}
              alt=""
              src="/vector-2.svg"
            />
            <img
              className={styles.errorFillGradient3}
              alt=""
              src="/vector-3.svg"
            />
            <img
              className={styles.errorFillGradient4}
              alt=""
              src="/vector-4.svg"
            />
            <img
              className={styles.errorFillGradient5}
              alt=""
              src="/vector-5.svg"
            />
            <img
              className={styles.errorFillGradient6}
              alt=""
              src="/vector-6.svg"
            />
            <img
              className={styles.errorFillGradient7}
              alt=""
              src="/vector-7.svg"
            />
            <img
              className={styles.errorFillGradient8}
              alt=""
              src="/vector-8.svg"
            />
            <img
              className={styles.errorFillGradient9}
              alt=""
              src="/vector-9.svg"
            />
            <img
              className={styles.errorFillGradient10}
              alt=""
              src="/vector-10.svg"
            />
          </div>
        </div>
      </header>
      <InputArea />
    </div>
  );
};

export default LOGIN;

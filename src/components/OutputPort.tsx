import { FunctionComponent } from "react";
import styles from "./OutputPort.module.css";

const OutputPort1: FunctionComponent = () => {
  return (
    <header className={styles.outputPort}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            className={styles.torryHarrisIntegrationSolutIcon}
            loading="lazy"
            alt=""
            src="/torryharrisintegrationsolutionslogo-600-11@2x.png"
          />
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.home}>
            <div className={styles.home1}>Home</div>
          </div>
          <div className={styles.features}>
            <div className={styles.features1}>Features</div>
          </div>
          <div className={styles.howItWorks}>
            <div className={styles.howItWorks1}>How it Works</div>
          </div>
          <div className={styles.benefits}>
            <div className={styles.benefits1}>Benefits</div>
          </div>
          <div className={styles.contactUs}>
            <div className={styles.contactUs1}>Contact Us</div>
          </div>
        </div>
        <div className={styles.subCta}>
          <button className={styles.inside}>
            <div className={styles.button}>Log In</div>
            <img className={styles.arrowDownIcon} alt="" />
          </button>
          <button className={styles.inside1}>
            <div className={styles.button1}>Register</div>
            <img
              className={styles.arrowDownIcon1}
              alt=""
              src="/arrowdown.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default OutputPort1;


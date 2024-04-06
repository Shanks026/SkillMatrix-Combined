import { FunctionComponent, useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";
import styles from "./REGISTER.module.css";

const REGISTER: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/register-2");
  }, [navigate]);

  return (
    <div className={styles.register1}>
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
      <div className={styles.register1Inner}>
        <div className={styles.frameParent}>
          <FrameComponent3 registerYourAccount="Register your account" />
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.employeeIDInputWrapper}>
              <div className={styles.employeeIDInput}>
                <FrameComponent2
                  enterYourEmployeeID="Enter your Employee ID"
                  inputPlaceholder="Employee ID"
                />
                <button
                  className={styles.logInButtonWrapper}
                  onClick={onFrameButtonClick}
                >
                  <div className={styles.logInButton}>
                    <div className={styles.button}>Next</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default REGISTER;

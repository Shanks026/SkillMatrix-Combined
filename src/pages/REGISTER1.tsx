import { FunctionComponent, useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";
import styles from "./REGISTER1.module.css";

const REGISTER1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogInClick = useCallback(() => {
    navigate("/register-3");
  }, [navigate]);

  return (
    <div className={styles.register2}>
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
      <div className={styles.register2Inner}>
        <div className={styles.frameParent}>
          <FrameComponent3
            registerYourAccount="Create a Password"
            propPadding="unset"
            propMinHeight="285px"
            propWidth="unset"
            propFlex="unset"
          />
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
          <form className={styles.enterPasswordInputParent}>
            <div className={styles.enterPasswordInput}>
              <FrameComponent2
                enterYourEmployeeID="Enter Password"
                inputPlaceholder="Password"
                propAlignSelf="stretch"
                propWidth="172px"
              />
              <FrameComponent2
                enterYourEmployeeID="Confirm Password"
                inputPlaceholder="Confirm Password"
                propAlignSelf="stretch"
                propWidth="203px"
              />
            </div>
            <button className={styles.logIn} onClick={onLogInClick}>
              <div className={styles.button}>Next</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default REGISTER1;

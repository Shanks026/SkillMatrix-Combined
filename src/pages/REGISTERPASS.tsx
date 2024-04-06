import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./REGISTERPASS.module.css";

const REGISTERPASS: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  return (
    <div className={styles.registerPass4}>
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
              className={styles.successMessageIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className={styles.successMessageIcon1}
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.successMessageIcon2}
              alt=""
              src="/vector-2.svg"
            />
            <img
              className={styles.successMessageIcon3}
              alt=""
              src="/vector-3.svg"
            />
            <img
              className={styles.successMessageIcon4}
              alt=""
              src="/vector-4.svg"
            />
            <img
              className={styles.successMessageIcon5}
              alt=""
              src="/vector-5.svg"
            />
            <img
              className={styles.successMessageIcon6}
              alt=""
              src="/vector-6.svg"
            />
            <img
              className={styles.successMessageIcon7}
              alt=""
              src="/vector-7.svg"
            />
            <img
              className={styles.successMessageIcon8}
              alt=""
              src="/vector-8.svg"
            />
            <img
              className={styles.successMessageIcon9}
              alt=""
              src="/vector-9.svg"
            />
            <img
              className={styles.successMessageIcon10}
              alt=""
              src="/vector-10.svg"
            />
          </div>
        </div>
      </header>
      <div className={styles.registerPass4Inner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.checkCircleFill0Wght400GraParent}>
              <img
                className={styles.checkCircleFill0Wght400GraIcon}
                loading="lazy"
                alt=""
                src="/check-circle-fill0-wght400-grad0-opsz24-1.svg"
              />
              <div className={styles.loginButton}>
                <div className={styles.passwordChangedSuccessfullyParent}>
                  <h1 className={styles.passwordChangedSuccessfully}>
                    Password Changed Successfully.
                  </h1>
                  <div className={styles.logInTo}>
                    Log In to your account to continue.
                  </div>
                </div>
              </div>
              <button
                className={styles.logInButtonWrapper}
                onClick={onFrameButtonClick}
              >
                <div className={styles.logInButton}>
                  <div className={styles.button}>Log In</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default REGISTERPASS;

import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./REGISTERPASS1.module.css";

const REGISTERPASS1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/register-pass-2");
  }, [navigate]);

  return (
    <div className={styles.registerPass1}>
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
      <div className={styles.registerPass1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.resetPasswordWrapper}>
                  <h1 className={styles.resetPassword}>Reset Password</h1>
                </div>
              </div>
              <div className={styles.pleaseEnterYour}>
                Please enter your email address to request password reset.
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.enterYourEmailWrapper}>
                    <div className={styles.enterYourEmail}>
                      Enter your Email
                    </div>
                  </div>
                  <input
                    className={styles.input}
                    placeholder="jane_cooper@thbs.com"
                    type="text"
                  />
                </div>
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

export default REGISTERPASS1;

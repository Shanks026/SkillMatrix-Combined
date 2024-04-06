import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LOGIN2.module.css";

const LOGIN2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/employee-dashboard");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/register-pass-1");
  }, [navigate]);

  return (
    <div className={styles.login2}>
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
      <div className={styles.login2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.welcomeToWrapper}>
                  <h2 className={styles.welcomeTo}>Welcome to</h2>
                </div>
                <div className={styles.skillmatrix1}>
                  <img
                    className={styles.vectorIcon11}
                    loading="lazy"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <img
                    className={styles.vectorIcon12}
                    loading="lazy"
                    alt=""
                    src="/vector-12.svg"
                  />
                  <img
                    className={styles.vectorIcon13}
                    loading="lazy"
                    alt=""
                    src="/vector-13.svg"
                  />
                  <img
                    className={styles.vectorIcon14}
                    loading="lazy"
                    alt=""
                    src="/vector-14.svg"
                  />
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector-15.svg"
                  />
                  <img
                    className={styles.vectorIcon16}
                    loading="lazy"
                    alt=""
                    src="/vector-16.svg"
                  />
                  <img
                    className={styles.vectorIcon17}
                    loading="lazy"
                    alt=""
                    src="/vector-17.svg"
                  />
                  <img
                    className={styles.vectorIcon18}
                    loading="lazy"
                    alt=""
                    src="/vector-18.svg"
                  />
                  <img
                    className={styles.vectorIcon19}
                    loading="lazy"
                    alt=""
                    src="/vector-19.svg"
                  />
                  <img
                    className={styles.vectorIcon20}
                    loading="lazy"
                    alt=""
                    src="/vector-20.svg"
                  />
                  <img
                    className={styles.vectorIcon21}
                    loading="lazy"
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>
              <div className={styles.logInToYourAccountWrapper}>
                <h3 className={styles.logInTo}>Log in to your account</h3>
              </div>
            </div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.enterYourPasswordWrapper}>
                  <div className={styles.enterYourPassword}>
                    Enter your Password
                  </div>
                </div>
                <input
                  className={styles.input}
                  placeholder="Password"
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
            <div className={styles.frameParent3}>
              <div className={styles.instanceParent}>
                <div className={styles.frameItem} />
                <div className={styles.rememberMe}>Remember me</div>
              </div>
              <div
                className={styles.forgotPasswordWrapper}
                onClick={onFrameContainer1Click}
              >
                <div className={styles.forgotPassword}>Forgot Password?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LOGIN2;


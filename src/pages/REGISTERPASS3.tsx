import { FunctionComponent, useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import { useNavigate } from "react-router-dom";
import styles from "./REGISTERPASS3.module.css";

const REGISTERPASS3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogInClick = useCallback(() => {
    navigate("/register-pass-4");
  }, [navigate]);

  return (
    <div className={styles.registerPass3}>
      <img className={styles.percOpIcon} alt="" src="/50perc-op.svg" />
      <header className={styles.firstRegister}>
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
      <div className={styles.registerPass3Inner}>
        <div className={styles.passwordEntryAreaParent}>
          <div className={styles.passwordEntryArea}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.resetPasswordWrapper}>
                  <h1 className={styles.resetPassword}>Reset Password</h1>
                </div>
              </div>
              <div
                className={styles.chooseAStrong}
              >{`Choose a strong password to secure your account. `}</div>
            </div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
          <form className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <FrameComponent5
                enterPassword="Enter Password"
                frame64Placeholder="Password"
              />
              <FrameComponent5
                enterPassword="Confirm Password"
                frame64Placeholder="Confirm Password"
                propWidth="201px"
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

export default REGISTERPASS3;

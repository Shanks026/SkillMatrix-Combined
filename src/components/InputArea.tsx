import { FunctionComponent } from "react";
import styles from "./InputArea.module.css";

const InputArea: FunctionComponent = () => {
  return (
    <div className={styles.inputArea}>
      <div className={styles.loginButtonWrapper}>
        <div className={styles.loginButton}>
          <img
            className={styles.errorFill0Wght400Grad0OpszIcon}
            loading="lazy"
            alt=""
            src="/error-fill0-wght400-grad0-opsz24-1.svg"
          />
          <div className={styles.frameParent}>
            <div className={styles.oopsErrorBoxWrapper}>
              <div className={styles.oopsErrorBox}>
                <h1 className={styles.oopsThereWas}>
                  Oops, There was an Error.
                </h1>
                <h3 className={styles.checkYourEmployee}>
                  Check your Employee ID and try again.
                </h3>
              </div>
            </div>
            <button className={styles.logInButtonWrapper}>
              <div className={styles.logInButton}>
                <div className={styles.button}>Retry</div>
              </div>
            </button>
            <div className={styles.areYouANewUserRegisterWrapper}>
              <div className={styles.areYouAContainer}>
                {`Are You a New User?  `}
                <span className={styles.register}>Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputArea;

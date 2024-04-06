import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EmailNotificationBox.module.css";

const EmailNotificationBox: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/register-pass-3");
  }, [navigate]);

  return (
    <div className={styles.emailNotificationBox}>
      <div className={styles.mailFillGradient}>
        <div className={styles.mailFill0Wght400Grad0Opsz2Parent}>
          <div className={styles.mailFill0Wght400Grad0Opsz2}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-111.svg"
            />
          </div>
          <div className={styles.passwordResetArea}>
            <div className={styles.loginButtonWrapper}>
              <div className={styles.loginButton}>
                <h1 className={styles.weveSentYou}>We’ve sent you an Email</h1>
                <div className={styles.aResetPassword}>
                  A reset password link has been sent to your email address.
                </div>
              </div>
            </div>
            <button
              className={styles.logInButtonWrapper}
              onClick={onFrameButtonClick}
            >
              <div className={styles.logInButton}>
                <div className={styles.button}>Go Back</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailNotificationBox;

import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  return (
    <div className={styles.accountCreationMessageWrapper}>
      <div className={styles.accountCreationMessage}>
        <div className={styles.checkCircleFill0Wght400GraParent}>
          <img
            className={styles.checkCircleFill0Wght400GraIcon}
            loading="lazy"
            alt=""
            src="/check-circle-fill0-wght400-grad0-opsz24-1.svg"
          />
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.yourAccountHasBeenCreatedParent}>
                <h1 className={styles.yourAccountHas}>
                  Your Account Has Been Created!
                </h1>
                <div className={styles.logInTo}>
                  Log In to your account to continue
                </div>
              </div>
            </div>
            <button className={styles.loginButton} onClick={onLoginButtonClick}>
              <div className={styles.logInButton}>
                <div className={styles.button}>Log In</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  registerYourAccount?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinHeight?: CSSProperties["minHeight"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  registerYourAccount,
  propPadding,
  propMinHeight,
  propWidth,
  propFlex,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      minHeight: propMinHeight,
    };
  }, [propPadding, propMinHeight]);

  const skillMatrixStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const welcomeToStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.frameWrapper} style={frameDiv1Style}>
      <div className={styles.frameParent}>
        <div className={styles.skillMatrixParent}>
          <div className={styles.skillMatrix} style={skillMatrixStyle}>
            <h2 className={styles.welcomeTo} style={welcomeToStyle}>
              Welcome to
            </h2>
          </div>
          <div className={styles.skillmatrix}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
            <img
              className={styles.vectorIcon3}
              loading="lazy"
              alt=""
              src="/vector-14.svg"
            />
            <img className={styles.vectorIcon4} alt="" src="/vector-15.svg" />
            <img
              className={styles.vectorIcon5}
              loading="lazy"
              alt=""
              src="/vector-16.svg"
            />
            <img
              className={styles.vectorIcon6}
              loading="lazy"
              alt=""
              src="/vector-17.svg"
            />
            <img
              className={styles.vectorIcon7}
              loading="lazy"
              alt=""
              src="/vector-18.svg"
            />
            <img
              className={styles.vectorIcon8}
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
            <img
              className={styles.vectorIcon9}
              loading="lazy"
              alt=""
              src="/vector-20.svg"
            />
            <img
              className={styles.vectorIcon10}
              loading="lazy"
              alt=""
              src="/vector-21.svg"
            />
          </div>
        </div>
        <h3 className={styles.registerYourAccount}>{registerYourAccount}</h3>
      </div>
    </div>
  );
};

export default FrameComponent3;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  enterYourEmployeeID?: string;
  inputPlaceholder?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  enterYourEmployeeID,
  inputPlaceholder,
  propAlignSelf,
  propWidth,
}) => {
  const loginButtonLabelStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const enterYourEmployeeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.loginButtonLabelParent}>
      <div className={styles.loginButtonLabel} style={loginButtonLabelStyle}>
        <div
          className={styles.enterYourEmployee}
          style={enterYourEmployeeStyle}
        >
          {enterYourEmployeeID}
        </div>
      </div>
      <input
        className={styles.input}
        placeholder={inputPlaceholder}
        type="text"
      />
    </div>
  );
};

export default FrameComponent2;

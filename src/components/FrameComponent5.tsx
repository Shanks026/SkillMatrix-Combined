import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  enterPassword?: string;
  frame64Placeholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  enterPassword,
  frame64Placeholder,
  propWidth,
}) => {
  const enterPasswordStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.passwordInputButtonParent}>
      <div className={styles.passwordInputButton}>
        <div className={styles.enterPassword} style={enterPasswordStyle}>
          {enterPassword}
        </div>
      </div>
      <input
        className={styles.frameChild}
        placeholder={frame64Placeholder}
        type="text"
      />
    </div>
  );
};

export default FrameComponent5;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  arrowDown?: string;
  arrowDown1?: string;

  /** Style props */
  propFlexWrap?: CSSProperties["flexWrap"];

  /** Action props */
  onInside2Click?: () => void;
  onInside3Click?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  arrowDown,
  arrowDown1,
  propFlexWrap,
  onInside2Click,
  onInside3Click,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  return (
    <div className={styles.insideParent} style={frameDivStyle}>
      <button className={styles.inside} onClick={onInside2Click}>
        <div className={styles.button}>Log In</div>
        <img className={styles.arrowDownIcon} alt="" src={arrowDown} />
      </button>
      <button className={styles.inside1} onClick={onInside3Click}>
        <div className={styles.button1}>Register</div>
        <img className={styles.arrowDownIcon1} alt="" src={arrowDown1} />
      </button>
    </div>
  );
};

export default FrameComponent;

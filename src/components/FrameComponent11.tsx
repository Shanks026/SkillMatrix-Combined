import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent11.module.css";

export type FrameComponent11Type = {
  domainTechnologyArea?: string;
  enterDomainTechnologyArea?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  domainTechnologyArea,
  enterDomainTechnologyArea,
  propMinWidth,
}) => {
  const domainTechnologyAreaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.domaintechnologyAreaWrapper}>
        <b
          className={styles.domaintechnologyArea}
          style={domainTechnologyAreaStyle}
        >
          {domainTechnologyArea}
        </b>
      </div>
      <div className={styles.confirmationQuestionButton}>
        <div className={styles.enterDomaintechnologyArea}>
          {enterDomainTechnologyArea}
        </div>
        <img className={styles.arrowDownIcon} alt="" src="/arrowdown.svg" />
      </div>
    </div>
  );
};

export default FrameComponent11;

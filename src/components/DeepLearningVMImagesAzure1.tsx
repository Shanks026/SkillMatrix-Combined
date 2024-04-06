import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DeepLearningVMImagesAzure1.module.css";

export type DeepLearningVMImagesAzure1Type = {
  deepLearningVMImages?: string;
  advanced?: string;
  yes?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
};

const DeepLearningVMImagesAzure1: FunctionComponent<
  DeepLearningVMImagesAzure1Type
> = ({
  deepLearningVMImages,
  advanced,
  yes,
  propBorder,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propMinWidth,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const androidComponentsNAStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const advancedStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div className={styles.deepLearningVMImagesAzure}>
      <div className={styles.deepLearningVm}>{deepLearningVMImages}</div>
      <button className={styles.frameParent} style={frameButtonStyle}>
        <div className={styles.androidComponentsNAWrapper}>
          <div
            className={styles.androidComponentsNA}
            style={androidComponentsNAStyle}
          />
        </div>
        <div className={styles.advanced} style={advancedStyle}>
          {advanced}
        </div>
      </button>
      <div className={styles.yes}>{yes}</div>
    </div>
  );
};

export default DeepLearningVMImagesAzure1;

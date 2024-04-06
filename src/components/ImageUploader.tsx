import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ImageUploader.module.css";

export type ImageUploaderType = {
  minusCirlce?: string;
  button?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ImageUploader: FunctionComponent<ImageUploaderType> = ({
  minusCirlce,
  button,
  propPadding,
  propDisplay,
  propMinWidth,
}) => {
  const cTAButtonsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <button className={styles.imageUploader}>
      <div className={styles.ctaButtons} style={cTAButtonsStyle}>
        <img className={styles.minusCirlceIcon} alt="" src={minusCirlce} />
        <div className={styles.button} style={buttonStyle}>
          {button}
        </div>
      </div>
    </button>
  );
};

export default ImageUploader;

import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "./ImageUploader";
import styles from "./LayoutSettings.module.css";

const LayoutSettings: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageUploaderClick = useCallback(() => {
    navigate("/add-skill");
  }, [navigate]);

  return (
    <div className={styles.layoutSettings}>
      <button className={styles.imageUploader} onClick={onImageUploaderClick}>
        <button className={styles.ctaButtons}>
          <img className={styles.addCircleIcon} alt="" src="/addcircle.svg" />
          <div className={styles.button}>Add skills</div>
        </button>
      </button>
      <ImageUploader minusCirlce="/minuscirlce.svg" button="Remove Skills" />
      <ImageUploader
        minusCirlce="/eye.svg"
        button="View Skills"
        propPadding="var(--padding-mid) var(--padding-13xl)"
        propDisplay="inline-block"
        propMinWidth="104px"
      />
      <ImageUploader
        minusCirlce="/eye.svg"
        button="View Draft"
        propPadding="var(--padding-mid) var(--padding-12xl)"
        propDisplay="inline-block"
        propMinWidth="106px"
      />
    </div>
  );
};

export default LayoutSettings;

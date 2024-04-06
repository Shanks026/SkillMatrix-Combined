import { FunctionComponent } from "react";
import styles from "./DeepLearningVMImagesAzure.module.css";

export type DeepLearningVMImagesAzureType = {
  azureManagedInstanceForAp?: string;
};

const DeepLearningVMImagesAzure: FunctionComponent<
  DeepLearningVMImagesAzureType
> = ({ azureManagedInstanceForAp }) => {
  return (
    <div className={styles.deepLearningVMImagesAzure}>
      <div className={styles.azureManagedInstance}>
        {azureManagedInstanceForAp}
      </div>
      <button className={styles.frameParent}>
        <div className={styles.ellipseWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.intermediate}>Intermediate</div>
      </button>
      <div className={styles.yes}>Yes</div>
    </div>
  );
};

export default DeepLearningVMImagesAzure;

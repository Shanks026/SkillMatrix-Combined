import { FunctionComponent } from "react";
import styles from "./OutputPort1.module.css";

const OutputPort: FunctionComponent = () => {
  return (
    <div className={styles.matrixOperations}>
      <h2 className={styles.enhancedSkillManagementContainer}>
        <p className={styles.enhanced}>Enhanced</p>
        <p className={styles.skillManagement}>Skill Management</p>
      </h2>
    </div>
  );
};

export default OutputPort;

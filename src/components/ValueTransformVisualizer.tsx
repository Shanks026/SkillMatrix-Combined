import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./ValueTransformVisualizer.module.css";

const ValueTransformVisualizer: FunctionComponent = () => {
  return (
    <div className={styles.valueTransformVisualizer}>
      <div className={styles.connectionVisualizer}>
        <img
          className={styles.connectionVisualizerChild}
          loading="lazy"
          alt=""
          src="/group-134@2x.png"
        />
        <div className={styles.performanceVisualizer}>
          <div className={styles.iterationVisualizer}>
            <div className={styles.algorithmVisualizer}>
              <h2 className={styles.getStartedWith}>
                Get Started with SkillMatrix Today.
              </h2>
            </div>
            <div className={styles.experienceThePowerOfSkillmWrapper}>
              <div className={styles.experienceThePower}>
                Experience the power of SkillMatrix in transforming your skill
                management practices. Sign up now to unlock a world of
                efficiency, insights, and empowerment for your organization.
              </div>
            </div>
          </div>
          <FrameComponent
            arrowDown="pending_I735:9278;649:5291"
            arrowDown1="pending_I735:9279;649:5298"
            propFlexWrap="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default ValueTransformVisualizer;

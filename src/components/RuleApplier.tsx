import { FunctionComponent } from "react";
import OutputPort from "./OutputPort";
import FrameComponent from "./FrameComponent";
import styles from "./RuleApplier.module.css";

const RuleApplier: FunctionComponent = () => {
  return (
    <div className={styles.errorHandlersWrapper}>
      <div className={styles.errorHandlers}>
        <div className={styles.decisionMakers}>
          <div className={styles.dataTransformer}>
            <OutputPort />
            <div className={styles.effortlesslyKeepTrack}>
              Effortlessly keep track of employees' evolving skills and
              expertise with SkillMatrix. Our platform allows you to maintain a
              comprehensive record of skills, certifications, and achievements,
              ensuring that teams are equipped with the right competencies to
              excel in their roles.
            </div>
          </div>
        </div>
        <div className={styles.functionBuilders}>
          <div className={styles.dataFlowController} />
          <div className={styles.constantValues}>
            <div className={styles.customFunctions}>
              <div className={styles.frameParent}>
                <FrameComponent />
                <div className={styles.gainActionableInsights}>
                  Gain actionable insights with SkillMatrix's robust reporting
                  and analytics capabilities. Our platform enables talent
                  mapping, resource allocation, and strategic planning based on
                  real-time data, helping organizations make informed decisions
                  and drive business success.
                </div>
              </div>
            </div>
            <div className={styles.dataVisualization}>
              <div className={styles.resultRenderer} />
              <div className={styles.eventListeners}>
                <div className={styles.animationControllers}>
                  <div className={styles.layoutDesigners}>
                    <h2 className={styles.userFriendlyInterface}>
                      User-Friendly Interface
                    </h2>
                  </div>
                  <div className={styles.effortlesslyKeepTrack1}>
                    Effortlessly keep track of employees' evolving skills and
                    expertise with SkillMatrix. Our platform allows you to
                    maintain a comprehensive record of skills, certifications,
                    and achievements, ensuring that teams are equipped with the
                    right competencies to excel in their roles.
                  </div>
                </div>
              </div>
              <div className={styles.resultRenderer1} />
              <div className={styles.eventListeners1}>
                <div className={styles.frameGroup}>
                  <div className={styles.increasedProductivityWrapper}>
                    <h2 className={styles.increasedProductivity}>
                      Increased Productivity
                    </h2>
                  </div>
                  <div className={styles.skillmatrixsStreamlinedSkil}>
                    SkillMatrix's streamlined skill management and efficient
                    training capabilities lead to increased productivity among
                    employees, enabling them to focus on tasks aligned with
                    their expertise and career goals.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleApplier;


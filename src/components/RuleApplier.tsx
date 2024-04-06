import { FunctionComponent } from "react";
import styles from "./RuleApplier.module.css";

const RuleApplier: FunctionComponent = () => {
  return (
    <div className={styles.ruleApplier}>
      <div className={styles.conditionChecker}>
        <div className={styles.resultRenderer}>
          <div className={styles.connectionBuilder}>
            <div className={styles.validationSuite}>
              <h2 className={styles.enhancedSkillManagementContainer}>
                <p className={styles.enhanced}>Enhanced</p>
                <p className={styles.skillManagement}>Skill Management</p>
              </h2>
            </div>
            <div className={styles.effortlesslyKeepTrack}>
              Effortlessly keep track of employees' evolving skills and
              expertise with SkillMatrix. Our platform allows you to maintain a
              comprehensive record of skills, certifications, and achievements,
              ensuring that teams are equipped with the right competencies to
              excel in their roles.
            </div>
          </div>
        </div>
        <div className={styles.algorithmExecutor}>
          <div className={styles.dataFlowController} />
          <div className={styles.testGeneratorParent}>
            <div className={styles.testGenerator}>
              <div className={styles.resultAnalyzer}>
                <div className={styles.statisticCalculator}>
                  <h2 className={styles.dataDrivenInsights}>
                    Data-Driven Insights
                  </h2>
                </div>
                <div className={styles.gainActionableInsights}>
                  Gain actionable insights with SkillMatrix's robust reporting
                  and analytics capabilities. Our platform enables talent
                  mapping, resource allocation, and strategic planning based on
                  real-time data, helping organizations make informed decisions
                  and drive business success.
                </div>
              </div>
            </div>
            <div className={styles.errorVisualizer}>
              <div className={styles.resultRenderer1} />
              <div className={styles.resultRenderer2}>
                <div className={styles.decisionVisualizer}>
                  <div className={styles.patternVisualizer}>
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
              <div className={styles.resultRenderer3} />
              <div className={styles.resultRenderer4}>
                <div className={styles.frameParent}>
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

import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import styles from "./EventTrigger.module.css";

const EventTrigger: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInsideClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  const onInside1Click = useCallback(() => {
    // Please sync "REGISTER_1" to the project
  }, []);

  return (
    <div className={styles.eventTrigger}>
      <div className={styles.dataFlow}>
        <h1 className={styles.empowerYourGrowth}>
          Empower Your Growth with SkillMatrix
        </h1>
        <div className={styles.dataFlowInner}>
          <div className={styles.frameParent}>
            <div className={styles.logicalOperatorParent}>
              <div className={styles.logicalOperator}>
                <h2 className={styles.personalizedSkillTracking}>
                  Personalized Skill Tracking Made Easy!
                </h2>
              </div>
              <div className={styles.skillmatrixRevolutionizesSki}>
                SkillMatrix revolutionizes skill tracking at Torry Harris
                Integrated Solutions. It's a user-friendly platform enabling
                individuals to monitor, manage, and enhance their skills.
                Tailored training resources, progress tracking, and seamless
                management empower users to excel in their roles. Join
                SkillMatrix for personalized skill development and continuous
                learning.
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <FrameComponent
                arrowDown="pending_I735:9249;649:5291"
                arrowDown1="/arrowdown.svg"
                onInside2Click={onInsideClick}
                onInside3Click={onInside1Click}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTrigger;

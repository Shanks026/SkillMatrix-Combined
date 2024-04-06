import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent10 from "../components/FrameComponent10";
import Sidebar from "../components/Sidebar";
import styles from "./ADDSKILL.module.css";

const ADDSKILL: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSidebarContainerClick = useCallback(() => {
    navigate("/employee-dashboard");
  }, [navigate]);

  const onSidebarClick = useCallback(() => {
    navigate("/my-skills");
  }, [navigate]);

  const onSidebarContainer1Click = useCallback(() => {
    navigate("/drafts");
  }, [navigate]);

  const onSidebarContainer2Click = useCallback(() => {
    navigate("/submissions");
  }, [navigate]);

  const onSidebarContainer3Click = useCallback(() => {
    navigate("/notification-1");
  }, [navigate]);

  const onSidebarContainer4Click = useCallback(() => {
    // Please sync "HELP AND SUPPORT_1" to the project
  }, []);

  const onSidebarContainer5Click = useCallback(() => {
    // Please sync "HELP AND SUPPORT_1" to the project
  }, []);

  const onInsideClick = useCallback(() => {
    // Please sync "ADD_SKILL_DRAFT SUCCESS" to the project
  }, []);

  const onInside1Click = useCallback(() => {
    // Please sync "ADD_SKILL_SUCCESS" to the project
  }, []);

  return (
    <div className={styles.addSkill}>
      <img className={styles.percOpIcon} alt="" src="/50perc-op.svg" />
      <h2 className={styles.addSkill1}>Add Skill</h2>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/line-24.svg" />
        <img className={styles.frameItem} alt="" src="/line-24.svg" />
        <img className={styles.frameInner} alt="" src="/line-24.svg" />
      </div>
      <form className={styles.table}>
        <div className={styles.tableInner}>
          <FrameComponent10 />
        </div>
        <div className={styles.insideButton}>
          <button className={styles.inside} onClick={onInsideClick}>
            <div className={styles.button}>Save Draft</div>
            <img className={styles.arrowDownIcon} alt="" />
          </button>
          <button className={styles.inside1} onClick={onInside1Click}>
            <div className={styles.button1}>Save</div>
            <img className={styles.arrowDownIcon1} alt="" />
          </button>
        </div>
      </form>
      <Sidebar
        onSidebarContainerClick={onSidebarContainerClick}
        onSidebarClick={onSidebarClick}
        onSidebarContainer1Click={onSidebarContainer1Click}
        onSidebarContainer2Click={onSidebarContainer2Click}
        onSidebarContainer3Click={onSidebarContainer3Click}
        onSidebarContainer4Click={onSidebarContainer4Click}
        onSidebarContainer5Click={onSidebarContainer5Click}
      />
    </div>
  );
};

export default ADDSKILL;

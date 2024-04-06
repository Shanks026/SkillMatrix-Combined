import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SidebarContainer.module.css";

const SidebarContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSidebarContainerClick = useCallback(() => {
    navigate("/employee-dashboard");
  }, [navigate]);

  const onSidebarContainer1Click = useCallback(() => {
    navigate("/my-skills");
  }, [navigate]);

  const onSidebarContainer2Click = useCallback(() => {
    navigate("/drafts");
  }, [navigate]);

  const onSidebarClick = useCallback(() => {
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

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar} onClick={onSidebarContainerClick}>
        <img
          className={styles.element4Icon}
          loading="lazy"
          alt=""
          src="/element4.svg"
        />
        <div className={styles.dashboard}>Dashboard</div>
      </div>
      <div className={styles.sidebar1} onClick={onSidebarContainer1Click}>
        <img
          className={styles.sortIcon}
          loading="lazy"
          alt=""
          src="/sort.svg"
        />
        <div className={styles.dashboard1}>Manage Skills</div>
      </div>
      <div className={styles.sidebar2} onClick={onSidebarContainer2Click}>
        <img
          className={styles.messageEditIcon}
          loading="lazy"
          alt=""
          src="/messageedit.svg"
        />
        <div className={styles.dashboard2}>Drafts</div>
      </div>
      <button className={styles.sidebar3} onClick={onSidebarClick}>
        <img className={styles.folder2Icon} alt="" src="/folder2.svg" />
        <div className={styles.dashboard3}>Submissions</div>
      </button>
      <div className={styles.sidebar4} onClick={onSidebarContainer3Click}>
        <img
          className={styles.notificationIcon}
          loading="lazy"
          alt=""
          src="/notification.svg"
        />
        <div className={styles.dashboard4}>Notifications</div>
      </div>
      <div className={styles.sidebar5} onClick={onSidebarContainer4Click}>
        <img
          className={styles.messageQuestionIcon}
          loading="lazy"
          alt=""
          src="/messagequestion.svg"
        />
        <div className={styles.dashboard5}>{`Help & Support`}</div>
      </div>
      <div className={styles.sidebar6} onClick={onSidebarContainer5Click}>
        <img
          className={styles.setting2Icon}
          loading="lazy"
          alt=""
          src="/setting2.svg"
        />
        <div className={styles.dashboard6}>Settings</div>
      </div>
    </div>
  );
};

export default SidebarContainer;

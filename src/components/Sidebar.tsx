import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  /** Style props */
  propDisplay?: CSSProperties["display"];

  /** Action props */
  onSidebarContainerClick?: () => void;
  onSidebarClick?: () => void;
  onSidebarContainer1Click?: () => void;
  onSidebarContainer2Click?: () => void;
  onSidebarContainer3Click?: () => void;
  onSidebarContainer4Click?: () => void;
  onSidebarContainer5Click?: () => void;
};

const Sidebar: FunctionComponent<SidebarType> = ({
  propDisplay,
  onSidebarContainerClick,
  onSidebarClick,
  onSidebarContainer1Click,
  onSidebarContainer2Click,
  onSidebarContainer3Click,
  onSidebarContainer4Click,
  onSidebarContainer5Click,
}) => {
  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sortingFunctionality}>
        <div className={styles.skillmatrix}>
          <img
            className={styles.messageEditInput}
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <img
            className={styles.messageEditInput1}
            loading="lazy"
            alt=""
            src="/vector-110.svg"
          />
          <img
            className={styles.messageEditInput2}
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
          <img
            className={styles.messageEditInput3}
            alt=""
            src="/vector-31.svg"
          />
          <img
            className={styles.messageEditInput4}
            alt=""
            src="/vector-41.svg"
          />
          <img
            className={styles.messageEditInput5}
            loading="lazy"
            alt=""
            src="/vector-51.svg"
          />
          <img
            className={styles.messageEditInput6}
            loading="lazy"
            alt=""
            src="/vector-61.svg"
          />
          <img
            className={styles.messageEditInput7}
            loading="lazy"
            alt=""
            src="/vector-71.svg"
          />
          <img
            className={styles.messageEditInput8}
            alt=""
            src="/vector-81.svg"
          />
          <img
            className={styles.messageEditInput9}
            loading="lazy"
            alt=""
            src="/vector-91.svg"
          />
          <img
            className={styles.messageEditInput10}
            loading="lazy"
            alt=""
            src="/vector-101.svg"
          />
        </div>
        <div className={styles.folderIcon}>
          <div className={styles.sidebar1} onClick={onSidebarContainerClick}>
            <img
              className={styles.element4Icon}
              loading="lazy"
              alt=""
              src="/element4.svg"
            />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <button className={styles.sidebar2} onClick={onSidebarClick}>
            <img className={styles.sortIcon} alt="" src="/sort.svg" />
            <div className={styles.dashboard1}>Manage Skills</div>
          </button>
          <div className={styles.sidebar3} onClick={onSidebarContainer1Click}>
            <img
              className={styles.messageEditIcon}
              loading="lazy"
              alt=""
              src="/messageedit.svg"
            />
            <div className={styles.dashboard2}>Drafts</div>
          </div>
          <div className={styles.sidebar4} onClick={onSidebarContainer2Click}>
            <img
              className={styles.folder2Icon}
              loading="lazy"
              alt=""
              src="/folder2.svg"
            />
            <div className={styles.dashboard3}>Submissions</div>
          </div>
          <div className={styles.sidebar5} onClick={onSidebarContainer3Click}>
            <img
              className={styles.notificationIcon}
              loading="lazy"
              alt=""
              src="/notification.svg"
            />
            <div className={styles.dashboard4}>Notifications</div>
          </div>
          <div className={styles.sidebar6} onClick={onSidebarContainer4Click}>
            <img
              className={styles.messageQuestionIcon}
              loading="lazy"
              alt=""
              src="/messagequestion.svg"
            />
            <div
              className={styles.dashboard5}
              style={dashboardStyle}
            >{`Help & Support`}</div>
          </div>
          <div className={styles.sidebar7} onClick={onSidebarContainer5Click}>
            <img
              className={styles.setting2Icon}
              loading="lazy"
              alt=""
              src="/setting2.svg"
            />
            <div className={styles.dashboard6}>Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

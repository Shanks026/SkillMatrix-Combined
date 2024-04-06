import { FunctionComponent, useCallback } from "react";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import { useNavigate } from "react-router-dom";
import styles from "./NOTIFICATION1.module.css";

const NOTIFICATION1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "NOTIFICATION_2" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "NOTIFICATION_3" to the project
  }, []);

  const onSidebarContainerClick = useCallback(() => {
    navigate("/employee-dashboard");
  }, [navigate]);

  const onSidebarContainer1Click = useCallback(() => {
    navigate("/my-skills");
  }, [navigate]);

  const onSidebarContainer2Click = useCallback(() => {
    navigate("/drafts");
  }, [navigate]);

  const onSidebarContainer3Click = useCallback(() => {
    navigate("/submissions");
  }, [navigate]);

  const onSidebarContainer4Click = useCallback(() => {
    navigate("/notification-1");
  }, [navigate]);

  const onSidebarContainer5Click = useCallback(() => {
    // Please sync "HELP AND SUPPORT_1" to the project
  }, []);

  const onSidebarContainer6Click = useCallback(() => {
    // Please sync "HELP AND SUPPORT_1" to the project
  }, []);

  return (
    <div className={styles.notification1}>
      <img className={styles.percOpIcon} alt="" src="/50perc-op.svg" />
      <h2 className={styles.notifications}>Notifications</h2>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <nav className={styles.frameContainer}>
            <div className={styles.allParent}>
              <div className={styles.all}>All</div>
              <div className={styles.wrapper}>
                <b className={styles.b}>8</b>
              </div>
            </div>
            <div
              className={styles.submissionsParent}
              onClick={onFrameContainer1Click}
            >
              <div className={styles.submissions}>Submissions</div>
              <div className={styles.container}>
                <b className={styles.b1}>6</b>
              </div>
            </div>
            <div
              className={styles.updatesParent}
              onClick={onFrameContainer2Click}
            >
              <div className={styles.updates}>Updates</div>
              <div className={styles.frame}>
                <b className={styles.b2}>1</b>
              </div>
            </div>
            <div className={styles.alertsParent}>
              <div className={styles.alerts}>Alerts</div>
              <div className={styles.frameDiv}>
                <b className={styles.b3}>0</b>
              </div>
            </div>
          </nav>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.sidebarInstance}>
          <FrameComponent9 />
          <div className={styles.frameParent1}>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.adminJaneSmithHasApprovedParent}>
                <div className={styles.adminJaneSmithContainer}>
                  <b>Admin Jane Smith</b>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.has}>{`has `}</span>
                  <b>Approved</b>
                  <span className={styles.yourSubmissio}> your submissio</span>
                  <span>n</span>
                  <span className={styles.span1}>{` `}</span>
                  <span className={styles.on}>on</span>
                  <span className={styles.span2}>{` `}</span>
                  <b>Microsoft SQL Server.</b>
                </div>
                <div className={styles.minAgo}>34 min ago</div>
              </div>
            </div>
            <div className={styles.deleteFill0Wght400Grad0OpsWrapper}>
              <img
                className={styles.deleteFill0Wght400Grad0OpsIcon}
                loading="lazy"
                alt=""
                src="/delete-fill0-wght400-grad0-opsz24-11.svg"
              />
            </div>
          </div>
          <FrameComponent8 />
          <div className={styles.frameParent2}>
            <div className={styles.ellipseContainer}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.adminDavidJohnsonHasRejectParent}>
                <div className={styles.adminDavidJohnsonContainer}>
                  <b>Admin David Johnson</b>
                  <span className={styles.span3}>{` `}</span>
                  <span className={styles.has1}>{`has `}</span>
                  <b>Rejected</b>
                  <span className={styles.yourSubmissio1}> your submissio</span>
                  <span>n</span>
                  <span className={styles.span4}>{` `}</span>
                  <span>on</span>
                  <span className={styles.span5}>{` `}</span>
                  <b>Git/GitHub.</b>
                </div>
                <div className={styles.hrAgo}>1 hr ago</div>
              </div>
            </div>
            <div className={styles.deleteFill0Wght400Grad0OpsContainer}>
              <img
                className={styles.deleteFill0Wght400Grad0OpsIcon1}
                loading="lazy"
                alt=""
                src="/delete-fill0-wght400-grad0-opsz24-11.svg"
              />
            </div>
          </div>
          <FrameComponent7 />
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.lineIcon} alt="" src="/line-24.svg" />
        <img className={styles.frameChild1} alt="" src="/line-24.svg" />
        <img className={styles.frameChild2} alt="" src="/line-24.svg" />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.skillMatrixInstance}>
          <div className={styles.skillmatrix}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-110.svg"
            />
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-22.svg"
            />
            <img className={styles.vectorIcon3} alt="" src="/vector-31.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector-41.svg" />
            <img
              className={styles.vectorIcon5}
              loading="lazy"
              alt=""
              src="/vector-51.svg"
            />
            <img
              className={styles.vectorIcon6}
              loading="lazy"
              alt=""
              src="/vector-61.svg"
            />
            <img
              className={styles.vectorIcon7}
              loading="lazy"
              alt=""
              src="/vector-71.svg"
            />
            <img className={styles.vectorIcon8} alt="" src="/vector-81.svg" />
            <img
              className={styles.vectorIcon9}
              loading="lazy"
              alt=""
              src="/vector-91.svg"
            />
            <img
              className={styles.vectorIcon10}
              loading="lazy"
              alt=""
              src="/vector-101.svg"
            />
          </div>
          <div className={styles.sortSidebar}>
            <div className={styles.sidebar1} onClick={onSidebarContainerClick}>
              <img
                className={styles.element4Icon}
                loading="lazy"
                alt=""
                src="/element4.svg"
              />
              <div className={styles.dashboard}>Dashboard</div>
            </div>
            <div className={styles.sidebar2} onClick={onSidebarContainer1Click}>
              <img
                className={styles.sortIcon}
                loading="lazy"
                alt=""
                src="/sort.svg"
              />
              <div className={styles.dashboard1}>Manage Skills</div>
            </div>
            <div className={styles.sidebar3} onClick={onSidebarContainer2Click}>
              <img
                className={styles.messageEditIcon}
                loading="lazy"
                alt=""
                src="/messageedit.svg"
              />
              <div className={styles.dashboard2}>Drafts</div>
            </div>
            <div className={styles.sidebar4} onClick={onSidebarContainer3Click}>
              <img
                className={styles.folder2Icon}
                loading="lazy"
                alt=""
                src="/folder2.svg"
              />
              <div className={styles.dashboard3}>Submissions</div>
            </div>
            <div className={styles.sidebar5} onClick={onSidebarContainer4Click}>
              <img
                className={styles.notificationIcon}
                loading="lazy"
                alt=""
                src="/notification.svg"
              />
              <div className={styles.dashboard4}>Notifications</div>
            </div>
            <div className={styles.sidebar6} onClick={onSidebarContainer5Click}>
              <img
                className={styles.messageQuestionIcon}
                loading="lazy"
                alt=""
                src="/messagequestion.svg"
              />
              <div className={styles.dashboard5}>{`Help & Support`}</div>
            </div>
            <div className={styles.sidebar7} onClick={onSidebarContainer6Click}>
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
    </div>
  );
};

export default NOTIFICATION1;

import { FunctionComponent, useCallback } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigate } from "react-router-dom";
import styles from "./DRAFTS.module.css";

const DRAFTS: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDeleteFILL0Wght400GRAD0OpsIconClick = useCallback(() => {
    // Please sync "DRAFTS_DELETE" to the project
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
    <div className={styles.drafts}>
      <img className={styles.percOpIcon} alt="" src="/50perc-op.svg" />
      <h1 className={styles.drafts1}>Drafts</h1>
      <div className={styles.frameParent}>
        <FrameComponent6
          topicProductWSO2Enterpris="Topic/Product : WSO2 Enterprise Integrator"
          domainTechnologyAreaInter="Domain/Technology Area : Intergration"
          subDomainTechnologyESB="Sub-Domain/Technology : ESB"
          onDeleteFILL0Wght400GRAD0OpsIconClick={
            onDeleteFILL0Wght400GRAD0OpsIconClick
          }
        />
        <FrameComponent6
          topicProductWSO2Enterpris="Topic/Product : Microsoft Azure Active Directory"
          domainTechnologyAreaInter="Domain/Technology Area : Integration"
          subDomainTechnologyESB="Sub-Domain/Technology : Identity Management"
          domainTechnologyAreaPadding="0px var(--padding-37xl) 0px var(--padding-21xl)"
          domainTechnologyAreaWidth="unset"
          subDomainTechnologyESBAlignSelf="unset"
          deleteFILL0Wght400GRAD0OpAlignSelf="unset"
        />
        <FrameComponent6
          topicProductWSO2Enterpris="Topic/Product : Amazon Elastic Kubernetes Service (EKS)"
          domainTechnologyAreaInter="Domain/Technology Area : Cloud-AWS"
          subDomainTechnologyESB="Sub-Domain/Technology : Compute - Containers"
          domainTechnologyAreaPadding="0px 0px 0px var(--padding-21xl)"
          domainTechnologyAreaWidth="610px"
          subDomainTechnologyESBAlignSelf="unset"
          deleteFILL0Wght400GRAD0OpAlignSelf="unset"
        />
        <FrameComponent6
          topicProductWSO2Enterpris="Topic/Product : API Gateway"
          domainTechnologyAreaInter="Domain/Technology Area : Cloud - GCP"
          subDomainTechnologyESB="Sub-Domain/Technology : API management"
          domainTechnologyAreaPadding="0px 176px 0px var(--padding-21xl)"
          domainTechnologyAreaWidth="610px"
          subDomainTechnologyESBAlignSelf="stretch"
          deleteFILL0Wght400GRAD0OpAlignSelf="stretch"
        />
      </div>
      <div className={styles.dashboardElement}>
        <img
          className={styles.dashboardElementChild}
          alt=""
          src="/line-24.svg"
        />
        <img
          className={styles.dashboardElementItem}
          alt=""
          src="/line-24.svg"
        />
        <img
          className={styles.dashboardElementInner}
          alt=""
          src="/line-24.svg"
        />
      </div>
      <div className={styles.searchNormal}>
        <div className={styles.searchNormalWrapper}>
          <img
            className={styles.searchNormalIcon}
            alt=""
            src="/searchnormal.svg"
          />
        </div>
        <input className={styles.search} placeholder="Search" type="text" />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.elementType}>
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
            <img className={styles.vectorIcon2} alt="" src="/vector-22.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector-31.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector-41.svg" />
            <img
              className={styles.vectorIcon5}
              loading="lazy"
              alt=""
              src="/vector-51.svg"
            />
            <img className={styles.vectorIcon6} alt="" src="/vector-61.svg" />
            <img
              className={styles.vectorIcon7}
              loading="lazy"
              alt=""
              src="/vector-71.svg"
            />
            <img className={styles.vectorIcon8} alt="" src="/vector-81.svg" />
            <img className={styles.vectorIcon9} alt="" src="/vector-91.svg" />
            <img
              className={styles.vectorIcon10}
              loading="lazy"
              alt=""
              src="/vector-101.svg"
            />
          </div>
          <div className={styles.sidebarParent}>
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

export default DRAFTS;

import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DeepLearningVMImagesAzure1 from "./DeepLearningVMImagesAzure1";
import DeepLearningVMImagesAzure from "./DeepLearningVMImagesAzure";
import Sidebar from "./Sidebar";
import styles from "./MYSKILLS.module.css";

const MYSKILLS: FunctionComponent = () => {
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
    navigate("/add-skill");
  }, [navigate]);

  const onEyeIconClick = useCallback(() => {
    // Please sync "VIEW_SKILL" to the project
  }, []);

  return (
    <form className={styles.mySkills}>
      <img className={styles.percOpIcon} alt="" src="/50perc-op.svg" />
      <h2 className={styles.manageSkills}>Manage Skills</h2>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/line-24.svg" />
        <img className={styles.frameItem} alt="" src="/line-24.svg" />
        <img className={styles.frameInner} alt="" src="/line-24.svg" />
      </div>
      <div className={styles.deepLearnCertification}>
        <div className={styles.azureManagedInstance}>
          <div className={styles.neojCertification}>
            <div className={styles.sSISCertification}>
              <h2 className={styles.skillBoard}>Skill Board</h2>
            </div>
            <div className={styles.insideButtonDown}>
              <div className={styles.inside}>
                <div className={styles.button}>Sort By</div>
                <img
                  className={styles.arrowDownIcon}
                  alt=""
                  src="/arrowdown.svg"
                />
              </div>
              <button className={styles.inside1} onClick={onInsideClick}>
                <img
                  className={styles.addCircleIcon}
                  alt=""
                  src="/addcircle.svg"
                />
                <div className={styles.button1}>New Skill</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.searchIcon}>
          <div className={styles.sidebarContainer}>
            <div className={styles.topicParent}>
              <div className={styles.topic}>Topic</div>
              <div className={styles.proficiency}>Proficiency</div>
              <div className={styles.training}>Training</div>
              <div className={styles.certified}>Certified</div>
              <div className={styles.certification}>Certification</div>
              <div className={styles.actions}>Actions</div>
            </div>
            <div className={styles.sortMessageEdit}>
              <div className={styles.elementSorting}>
                <div className={styles.deepLearningVMImagesAzureParent}>
                  <DeepLearningVMImagesAzure1
                    deepLearningVMImages="Deep Learning VM Images"
                    advanced="Advanced"
                    yes="Yes"
                  />
                  <DeepLearningVMImagesAzure azureManagedInstanceForAp="Azure Managed Instance for Apache Cassandra" />
                  <DeepLearningVMImagesAzure1
                    deepLearningVMImages="Neo4j"
                    advanced="Advanced"
                    yes="Yes"
                    propBorder="2px solid var(--color-limegreen)"
                    propBackgroundColor="#eeffed"
                    propBackgroundColor1="#1aac29"
                    propColor="#073d0c"
                    propMinWidth="83px"
                  />
                  <DeepLearningVMImagesAzure1
                    deepLearningVMImages="Google Cloud Storage"
                    advanced="Beginner"
                    yes="No"
                    propBorder="2px solid var(--color-dodgerblue)"
                    propBackgroundColor="#d5edff"
                    propBackgroundColor1="#0085ff"
                    propColor="#0a3452"
                    propMinWidth="71px"
                  />
                  <DeepLearningVMImagesAzure azureManagedInstanceForAp="Microsoft SQL Server Integration Services (SSIS)" />
                  <DeepLearningVMImagesAzure azureManagedInstanceForAp="Android Architecture Components" />
                </div>
                <div className={styles.yesParent}>
                  <div className={styles.yes}>Yes</div>
                  <div className={styles.no}>No</div>
                  <div className={styles.yes1}>Yes</div>
                  <div className={styles.no1}>No</div>
                  <div className={styles.yes2}>Yes</div>
                  <div className={styles.yes3}>Yes</div>
                </div>
                <div className={styles.deepLearningCertificationParent}>
                  <div className={styles.deepLearningCertification}>
                    Deep Learning Certification
                  </div>
                  <div className={styles.na}>N/A</div>
                  <div className={styles.neo4jCertification}>
                    Neo4j Certification
                  </div>
                  <div className={styles.na1}>N/A</div>
                  <div className={styles.ssisCertification}>
                    SSIS Certification
                  </div>
                  <div className={styles.aacCertification}>
                    AAC Certification
                  </div>
                </div>
                <div className={styles.eyeEditTrashIcons}>
                  <img
                    className={styles.eyeIcon}
                    loading="lazy"
                    alt=""
                    src="/eye1.svg"
                    onClick={onEyeIconClick}
                  />
                  <img
                    className={styles.edit2Icon}
                    loading="lazy"
                    alt=""
                    src="/edit21.svg"
                  />
                  <img
                    className={styles.trashIcon}
                    loading="lazy"
                    alt=""
                    src="/trash.svg"
                  />
                  <img className={styles.eyeIcon1} alt="" src="/eye1.svg" />
                  <img className={styles.edit2Icon1} alt="" src="/edit21.svg" />
                  <img className={styles.trashIcon1} alt="" src="/trash.svg" />
                  <img className={styles.eyeIcon2} alt="" src="/eye1.svg" />
                  <img className={styles.edit2Icon2} alt="" src="/edit21.svg" />
                  <img className={styles.trashIcon2} alt="" src="/trash.svg" />
                  <img className={styles.eyeIcon3} alt="" src="/eye1.svg" />
                  <img className={styles.edit2Icon3} alt="" src="/edit21.svg" />
                  <img className={styles.trashIcon3} alt="" src="/trash.svg" />
                  <img className={styles.eyeIcon4} alt="" src="/eye1.svg" />
                  <img className={styles.edit2Icon4} alt="" src="/edit21.svg" />
                  <img className={styles.trashIcon4} alt="" src="/trash.svg" />
                  <img className={styles.eyeIcon5} alt="" src="/eye1.svg" />
                  <img className={styles.edit2Icon5} alt="" src="/edit21.svg" />
                  <img className={styles.trashIcon5} alt="" src="/trash.svg" />
                </div>
              </div>
              <div className={styles.searchBarComponent}>
                <div className={styles.dashboardDisplayContainer}>
                  <img
                    className={styles.arrowSquareLeftIcon}
                    loading="lazy"
                    alt=""
                    src="/arrowsquareleft.svg"
                  />
                  <img
                    className={styles.arrowSquareRightIcon}
                    loading="lazy"
                    alt=""
                    src="/arrowsquareright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchInputField}>
        <div className={styles.sidebarInstance}>
          <img
            className={styles.searchNormalIcon}
            alt=""
            src="/searchnormal.svg"
          />
        </div>
        <input className={styles.search} placeholder="Search" type="text" />
      </div>
      <Sidebar
        propDisplay="inline-block"
        onSidebarContainerClick={onSidebarContainerClick}
        onSidebarClick={onSidebarClick}
        onSidebarContainer1Click={onSidebarContainer1Click}
        onSidebarContainer2Click={onSidebarContainer2Click}
        onSidebarContainer3Click={onSidebarContainer3Click}
        onSidebarContainer4Click={onSidebarContainer4Click}
        onSidebarContainer5Click={onSidebarContainer5Click}
      />
    </form>
  );
};

export default MYSKILLS;

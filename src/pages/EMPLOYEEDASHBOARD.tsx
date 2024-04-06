import { FunctionComponent, useCallback } from "react";
import LayoutSettings from "../components/LayoutSettings";
import { useNavigate } from "react-router-dom";
import styles from "./EMPLOYEEDASHBOARD.module.css";

const EMPLOYEEDASHBOARD: FunctionComponent = () => {
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
    <div className={styles.employeeDashboard}>
      <img className={styles.percOpIcon} alt="" src="/50perc-op.svg" />
      <h1 className={styles.employeesDashboard}>Employee’s Dashboard</h1>
      <div className={styles.knownSkills}>
        <div className={styles.skillentitysvgrepocom}>
          <img
            className={styles.skillEntitySvgrepocomIcon}
            loading="lazy"
            alt=""
            src="/skillentity-svgrepocom.svg"
          />
          <div className={styles.awa}>26</div>
          <div className={styles.knownSkills1}>Known Skills</div>
        </div>
      </div>
      <div className={styles.certifications}>
        <div className={styles.awardParent}>
          <img
            className={styles.awardIcon}
            loading="lazy"
            alt=""
            src="/award.svg"
          />
          <div className={styles.div}>14</div>
          <div className={styles.knownSkills2}>Certifications</div>
        </div>
      </div>
      <div className={styles.topSkill}>
        <div className={styles.trendUpParent}>
          <img
            className={styles.trendUpIcon}
            loading="lazy"
            alt=""
            src="/trendup.svg"
          />
          <div className={styles.javaParent}>
            <h1 className={styles.java}>React JS</h1>
            <div className={styles.topSkill1}>Top Skill</div>
          </div>
        </div>
      </div>
      <div className={styles.skillBoard}>
        <div className={styles.skillBoard1}>
          <h3 className={styles.skillBoard2}>Skill Board</h3>
          <div className={styles.contents}>
            <div className={styles.serialNumber}>
              <div className={styles.heading}>
                <div className={styles.sno}>SNo.</div>
              </div>
              <div className={styles.item}>
                <div className={styles.devops}>1</div>
              </div>
              <div className={styles.item1}>
                <div className={styles.webFrontendTechnologies}>2</div>
              </div>
              <div className={styles.item2}>
                <div className={styles.creativeDesign}>3</div>
              </div>
            </div>
            <div className={styles.domain}>
              <div className={styles.heading1}>
                <div className={styles.domain1}>Domain</div>
              </div>
              <div className={styles.item3}>
                <div className={styles.enterpriseAutomation}>
                  Enterprise Automation
                </div>
              </div>
              <div className={styles.item4}>
                <div className={styles.webfrontEndTechnologies}>
                  Web/Front-end Technologies
                </div>
              </div>
              <div className={styles.item5}>
                <div className={styles.uiux}>UI/UX</div>
              </div>
            </div>
            <div className={styles.subDomain}>
              <div className={styles.heading2}>
                <div className={styles.subDomain1}>Sub-Domain</div>
              </div>
              <div className={styles.item6}>
                <div className={styles.devops1}>Devops</div>
              </div>
              <div className={styles.item7}>
                <div className={styles.frontEnd}>Front-end</div>
              </div>
              <div className={styles.item8}>
                <div className={styles.designAndPrototyping}>
                  Design and Prototyping
                </div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.heading3}>
                <div className={styles.technologytopic}>Technology/Topic</div>
              </div>
              <div className={styles.item9}>
                <div className={styles.gitgitHub}>Git/Git Hub</div>
              </div>
              <div className={styles.item10}>
                <div className={styles.reactJs}>React JS</div>
              </div>
              <div className={styles.item11}>
                <div className={styles.figma}>Figma</div>
              </div>
            </div>
            <div className={styles.proficiency}>
              <div className={styles.heading4}>
                <div className={styles.proficiency1}>Proficiency</div>
              </div>
              <div className={styles.item12}>
                <div className={styles.headerCell}>Header Cell</div>
              </div>
              <div className={styles.item13}>
                <div className={styles.headerCell1}>Header Cell</div>
              </div>
              <div className={styles.item14}>
                <div className={styles.headerCell2}>Header Cell</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.controlBar}>
        <h3 className={styles.manageSkills}>Manage Skills</h3>
        <LayoutSettings />
      </div>
      <div className={styles.menu}>
        <img className={styles.menuChild} alt="" src="/line-24.svg" />
        <img className={styles.menuItem} alt="" src="/line-24.svg" />
        <img className={styles.menuInner} alt="" src="/line-24.svg" />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.skillmatrixParent}>
          <div className={styles.skillmatrix}>
            <img
              className={styles.separatorIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <img
              className={styles.separatorIcon1}
              loading="lazy"
              alt=""
              src="/vector-110.svg"
            />
            <img
              className={styles.separatorIcon2}
              alt=""
              src="/vector-22.svg"
            />
            <img
              className={styles.separatorIcon3}
              alt=""
              src="/vector-31.svg"
            />
            <img
              className={styles.separatorIcon4}
              alt=""
              src="/vector-41.svg"
            />
            <img
              className={styles.separatorIcon5}
              loading="lazy"
              alt=""
              src="/vector-51.svg"
            />
            <img
              className={styles.separatorIcon6}
              alt=""
              src="/vector-61.svg"
            />
            <img
              className={styles.separatorIcon7}
              loading="lazy"
              alt=""
              src="/vector-71.svg"
            />
            <img
              className={styles.separatorIcon8}
              alt=""
              src="/vector-81.svg"
            />
            <img
              className={styles.separatorIcon9}
              alt=""
              src="/vector-91.svg"
            />
            <img
              className={styles.separatorIcon10}
              loading="lazy"
              alt=""
              src="/vector-101.svg"
            />
          </div>
          <div className={styles.column}>
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
      <div className={styles.profile}>
        <div className={styles.distributeHorizontally}>
          <div className={styles.distributeVertically}>
            <h3 className={styles.profile1}>Profile</h3>
            <div className={styles.size}>
              <img
                className={styles.edit2Icon}
                loading="lazy"
                alt=""
                src="/edit2.svg"
              />
            </div>
          </div>
          <div className={styles.opacity}>
            <div className={styles.borderRadius}>
              <div className={styles.blendMode} />
            </div>
            <div className={styles.fillColor}>
              <div className={styles.strokeColor}>
                <h3 className={styles.employeeName}>Employee Name</h3>
                <div className={styles.employeeId11705}>Employee ID: 11705</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.emailIdWrapper}>
              <div className={styles.emailId}>Email ID</div>
            </div>
            <div className={styles.roleWrapper}>
              <div className={styles.role}>Role</div>
            </div>
            <div className={styles.levelWrapper}>
              <div className={styles.level}>Level</div>
            </div>
            <div className={styles.accountWrapper}>
              <div className={styles.account}>Account</div>
            </div>
            <div className={styles.businessUnitWrapper}>
              <div className={styles.businessUnit}>Business Unit</div>
            </div>
            <div className={styles.baseBranchWrapper}>
              <div className={styles.baseBranch}>Base Branch</div>
            </div>
            <div className={styles.domainWrapper}>
              <div className={styles.domain2}>Domain</div>
            </div>
            <div className={styles.areaWrapper}>
              <div className={styles.area}>Area</div>
            </div>
            <div className={styles.directorsWrapper}>
              <div className={styles.directors}>Directors</div>
            </div>
            <div className={styles.repManagerWrapper}>
              <div className={styles.repManager}>Rep. Manager</div>
            </div>
            <div className={styles.rmEmpIdWrapper}>
              <div className={styles.rmEmpId}>RM Emp ID</div>
            </div>
            <div className={styles.sdmWrapper}>
              <div className={styles.sdm}>SDM</div>
            </div>
            <div className={styles.sdmIdWrapper}>
              <div className={styles.sdmId}>SDM ID</div>
            </div>
            <div className={styles.domainManagerWrapper}>
              <div className={styles.domainManager}>Domain Manager</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.wrapper}>
              <div className={styles.div1}>:</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div2}>:</div>
            </div>
            <div className={styles.frame}>
              <div className={styles.div3}>:</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.div4}>:</div>
            </div>
            <div className={styles.wrapper1}>
              <div className={styles.div5}>:</div>
            </div>
            <div className={styles.wrapper2}>
              <div className={styles.div6}>:</div>
            </div>
            <div className={styles.wrapper3}>
              <div className={styles.div7}>:</div>
            </div>
            <div className={styles.wrapper4}>
              <div className={styles.div8}>:</div>
            </div>
            <div className={styles.wrapper5}>
              <div className={styles.div9}>:</div>
            </div>
            <div className={styles.wrapper6}>
              <div className={styles.div10}>:</div>
            </div>
            <div className={styles.wrapper7}>
              <div className={styles.div11}>:</div>
            </div>
            <div className={styles.wrapper8}>
              <div className={styles.div12}>:</div>
            </div>
            <div className={styles.wrapper9}>
              <div className={styles.div13}>:</div>
            </div>
            <div className={styles.wrapper10}>
              <div className={styles.div14}>:</div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.emailIdContainer}>
              <div className={styles.emailId1}>Email ID</div>
            </div>
            <div className={styles.roleContainer}>
              <div className={styles.role1}>Role</div>
            </div>
            <div className={styles.levelContainer}>
              <div className={styles.level1}>Level</div>
            </div>
            <div className={styles.accountContainer}>
              <div className={styles.account1}>Account</div>
            </div>
            <div className={styles.businessUnitContainer}>
              <div className={styles.businessUnit1}>Business Unit</div>
            </div>
            <div className={styles.baseBranchContainer}>
              <div className={styles.baseBranch1}>Base Branch</div>
            </div>
            <div className={styles.domainContainer}>
              <div className={styles.domain3}>Domain</div>
            </div>
            <div className={styles.areaContainer}>
              <div className={styles.area1}>Area</div>
            </div>
            <div className={styles.directorsContainer}>
              <div className={styles.directors1}>Directors</div>
            </div>
            <div className={styles.reportingManagerWrapper}>
              <div className={styles.reportingManager}>Reporting Manager</div>
            </div>
            <div className={styles.rmEmpIdContainer}>
              <div className={styles.rmEmpId1}>RM Emp ID</div>
            </div>
            <div className={styles.sdmContainer}>
              <div className={styles.sdm1}>SDM</div>
            </div>
            <div className={styles.sdmIdContainer}>
              <div className={styles.sdmId1}>SDM ID</div>
            </div>
            <div className={styles.domainManagerContainer}>
              <div className={styles.domainManager1}>Domain Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMPLOYEEDASHBOARD;

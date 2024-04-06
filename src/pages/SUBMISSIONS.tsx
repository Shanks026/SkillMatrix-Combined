import { FunctionComponent } from "react";
import SidebarContainer from "../components/SidebarContainer";
import styles from "./SUBMISSIONS.module.css";

const SUBMISSIONS: FunctionComponent = () => {
  return (
    <div className={styles.submissions}>
      <img className={styles.percOpIcon} alt="" src="/50perc-op.svg" />
      <h2 className={styles.submissions1}>Submissions</h2>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/line-24.svg" />
        <img className={styles.frameItem} alt="" src="/line-24.svg" />
        <img className={styles.frameInner} alt="" src="/line-24.svg" />
      </div>
      <div className={styles.cassandraCertInst}>
        <div className={styles.cloudProvidersParent}>
          <div className={styles.cloudProviders}>
            <div className={styles.topic}>Topic</div>
            <div className={styles.deepLearningVm}>Deep Learning VM Images</div>
            <div className={styles.azureManagedInstance}>
              Azure Managed Instance for Apache Cassandra
            </div>
            <div className={styles.neo4j}>Neo4j</div>
            <div className={styles.googleCloudStorage}>
              Google Cloud Storage
            </div>
            <div className={styles.microsoftSqlServer}>
              Microsoft SQL Server Integration Services (SSIS)
            </div>
            <div className={styles.androidArchitectureComponent}>
              Android Architecture Components
            </div>
          </div>
          <div className={styles.reviewedByName}>
            <div className={styles.certNameParent}>
              <div className={styles.certName}>
                <div className={styles.certification}>Certification</div>
                <div className={styles.deepLearningCertification}>
                  Deep Learning Certification
                </div>
              </div>
              <div className={styles.certName1}>
                <div className={styles.reviewedBy}>Reviewed By</div>
                <div className={styles.name1}>Name 1</div>
              </div>
            </div>
            <div className={styles.certifyingBodies}>
              <div className={styles.azureManagedInstance1}>
                Azure Managed Instance for Apache Cassandra Certification
              </div>
              <div className={styles.div}>-</div>
            </div>
            <div className={styles.certifyingBodies1}>
              <div className={styles.neo4jCertification}>
                Neo4j Certification
              </div>
              <div className={styles.name2}>Name 2</div>
            </div>
            <div className={styles.certifyingBodies2}>
              <div className={styles.googleCloudStorage1}>
                Google Cloud Storage Certification
              </div>
              <div className={styles.name21}>Name 2</div>
            </div>
            <div className={styles.certifyingBodies3}>
              <div className={styles.ssisCertification}>SSIS Certification</div>
              <div className={styles.name3}>Name3</div>
            </div>
            <div className={styles.certifyingBodies4}>
              <div className={styles.aacCertification}>AAC Certification</div>
              <div className={styles.div1}>-</div>
            </div>
          </div>
          <div className={styles.searchBox}>
            <div className={styles.status}>Status</div>
            <div className={styles.skillsMatrix}>
              <div className={styles.messageEditParent}>
                <div className={styles.messageEdit}>
                  <div className={styles.folderIcon} />
                </div>
                <div className={styles.approved}>Approved</div>
              </div>
              <button className={styles.frameParent}>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.ellipseDiv} />
                </div>
                <div className={styles.inProgress}>In Progress</div>
              </button>
              <div className={styles.frameGroup}>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.rejected}>Rejected</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseFrame}>
                  <div className={styles.frameChild2} />
                </div>
                <div className={styles.approved1}>Approved</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.ellipseWrapper1}>
                  <div className={styles.frameChild3} />
                </div>
                <div className={styles.approved2}>Approved</div>
              </div>
              <button className={styles.frameButton}>
                <div className={styles.ellipseWrapper2}>
                  <div className={styles.frameChild4} />
                </div>
                <div className={styles.inProgress1}>In Progress</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.questionMarkIcon}>
          <div className={styles.settingIcon}>
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
      <div className={styles.dashboardSearch}>
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
        <div className={styles.sidebarElements}>
          <div className={styles.skillmatrix}>
            <img
              className={styles.elementTypesIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <img
              className={styles.elementTypesIcon1}
              loading="lazy"
              alt=""
              src="/vector-110.svg"
            />
            <img
              className={styles.elementTypesIcon2}
              loading="lazy"
              alt=""
              src="/vector-22.svg"
            />
            <img
              className={styles.elementTypesIcon3}
              alt=""
              src="/vector-31.svg"
            />
            <img
              className={styles.elementTypesIcon4}
              alt=""
              src="/vector-41.svg"
            />
            <img
              className={styles.elementTypesIcon5}
              loading="lazy"
              alt=""
              src="/vector-51.svg"
            />
            <img
              className={styles.elementTypesIcon6}
              alt=""
              src="/vector-61.svg"
            />
            <img
              className={styles.elementTypesIcon7}
              loading="lazy"
              alt=""
              src="/vector-71.svg"
            />
            <img
              className={styles.elementTypesIcon8}
              alt=""
              src="/vector-81.svg"
            />
            <img
              className={styles.elementTypesIcon9}
              loading="lazy"
              alt=""
              src="/vector-91.svg"
            />
            <img
              className={styles.elementTypesIcon10}
              loading="lazy"
              alt=""
              src="/vector-101.svg"
            />
          </div>
          <SidebarContainer />
        </div>
      </div>
    </div>
  );
};

export default SUBMISSIONS;

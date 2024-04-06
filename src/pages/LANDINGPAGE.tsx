import { FunctionComponent } from "react";
import OutputPort1 from "../components/OutputPort";
import EventTrigger from "../components/EventTrigger";
import RuleApplier from "../components/RuleApplier";
import ValueTransformVisualizer from "../components/ValueTransformVisualizer";
import DataComparator from "../components/DataComparator";
import styles from "./LANDINGPAGE.module.css";

const LANDINGPAGE: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.wrapperBranchingTree}>
        <img className={styles.branchingTreeIcon} alt="" />
      </div>
      <img
        className={styles.group1412}
        loading="lazy"
        alt=""
        src="/group-141-2@2x.png"
      />
      <OutputPort1 />
      <EventTrigger />
      <div className={styles.dataSorter}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.dashInfoFeaturesParent}>
                <div className={styles.dashInfoFeatures}>
                  <div className={styles.frameContainer}>
                    <div className={styles.userServiceWrapper}>
                      <div className={styles.userService}>User Service</div>
                    </div>
                    <div className={styles.ourUserServiceStreamlinesAWrapper}>
                      <div className={styles.ourUserService}>
                        User Service simplifies account management,
                        authentication, ensuring smooth user experience.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dashInfoFeaturesGroup}>
                  <div className={styles.dashInfoFeatures1}>
                    <div className={styles.frameDiv}>
                      <div className={styles.userServiceContainer}>
                        <div className={styles.userService1}>
                          Report Generation
                        </div>
                      </div>
                      <div
                        className={styles.ourUserServiceStreamlinesAContainer}
                      >
                        <div className={styles.ourUserService1}>
                          Reporting Service generates filtered skill, domain,
                          expertise reports, exports them via APIs.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dashInfoFeatures2}>
                    <div className={styles.frameParent1}>
                      <div className={styles.userServiceFrame}>
                        <div className={styles.userService2}>Notification</div>
                      </div>
                      <div className={styles.ourUserServiceStreamlinesAFrame}>
                        <div className={styles.ourUserService2}>
                          Notification Service updates users on skill
                          submissions, integrates with email and messaging.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dashInfoFeatures3}>
              <div className={styles.dataAggregator}>
                <div className={styles.inputFilter}>
                  <div className={styles.userService3}>Role Based Access</div>
                </div>
                <div className={styles.ourUserServiceStreamlinesAWrapper1}>
                  <div className={styles.ourUserService3}>
                    Assigns role-based access for employees, trainees, admins,
                    ensuring data security.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dashInfoFeaturesContainer}>
            <div className={styles.dashInfoFeatures4}>
              <div className={styles.frameParent2}>
                <div className={styles.userServiceWrapper1}>
                  <div className={styles.userService4}>
                    <b>Skill Captur</b>
                    <span className={styles.e}>e</span>
                  </div>
                </div>
                <div className={styles.ourUserServiceStreamlinesAWrapper2}>
                  <div className={styles.ourUserService4}>
                    Easily capture, edit, submit skill data with draft saving
                    and profile viewing for efficiency.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent3}>
                <div className={styles.dashInfoFeaturesParent1}>
                  <div className={styles.dashInfoFeatures5}>
                    <div className={styles.outputMerge}>
                      <div className={styles.splitter}>
                        <b className={styles.userService5}>Skill Management</b>
                      </div>
                      <div
                        className={styles.ourUserServiceStreamlinesAWrapper3}
                      >
                        <div className={styles.ourUserService5}>
                          Admins manage skill data using downloads and
                          assignments based on expertise levels.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dashInfoFeatures6}>
                    <div className={styles.frameParent4}>
                      <div className={styles.userServiceWrapper2}>
                        <div className={styles.userService6}>Dashboard</div>
                      </div>
                      <div
                        className={styles.ourUserServiceStreamlinesAWrapper4}
                      >
                        <div className={styles.ourUserService6}>
                          Dashboard Service offers analysis reports and
                          visualizations for effective data analysis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dashInfoFeatures7}>
                  <div className={styles.frameParent5}>
                    <div className={styles.userServiceWrapper3}>
                      <div className={styles.userService7}>API Gateway</div>
                    </div>
                    <div className={styles.ourUserServiceStreamlinesAWrapper5}>
                      <div className={styles.ourUserService7}>
                        The Gateway Service acts as a central entry point,
                        efficiently routing requests for a streamlined user
                        experience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.squareRooter}>
          <div className={styles.absolutizer}>
            <h1 className={styles.howItWorks}>How It Works?</h1>
          </div>
          <div className={styles.discoverHowOur}>
            Discover How Our Integrated Approach Empowers You for Future Success
          </div>
        </div>
      </div>
      <div className={styles.minFinder}>
        <div className={styles.summarizer}>
          <div className={styles.averageCalculator}>
            <h2 className={styles.userRegistration}>User Registration:</h2>
          </div>
          <div className={styles.modeFinder}>
            <b className={styles.b}>1</b>
            <div className={styles.skewnessCalculator}>
              <div className={styles.signUpFor}>
                Sign up for SkillMatrix and gain access to a comprehensive skill
                management platform. Admin approval ensures a secure and
                efficient user experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.correlationCalculator}>
        <div className={styles.covarianceCalculator}>
          <div className={styles.pearsonCorrelationCalculator}>
            <h2
              className={styles.skillCapture}
            >{`Skill Capture & Management:`}</h2>
          </div>
          <div className={styles.distanceCalculator}>
            <div className={styles.similarityCalculator}>
              <div className={styles.captureEditAnd}>
                Capture, edit, and submit your skills effortlessly with
                SkillMatrix's intuitive interface. Admins and Employees manage
                skill data.
              </div>
            </div>
            <b className={styles.b1}>2</b>
          </div>
        </div>
      </div>
      <div className={styles.nearestNeighborFinder}>
        <div className={styles.dBSCANClusterer}>
          <div className={styles.kMeansClusterer}>
            <h2
              className={styles.dashboardReporting}
            >{`Dashboard & Reporting:`}</h2>
          </div>
          <div className={styles.spectralClustering}>
            <b className={styles.shapeWithFill}>3</b>
            <div className={styles.principalComponentAnalysis}>
              <div className={styles.diveIntoPersonalized}>
                Dive into personalized dashboards for skill analytics and
                insights. Generate detailed reports based on filtered data for
                informed decision-making.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.decisionTreeClassifier}>
        <div className={styles.randomForestClassifier}>
          <h2
            className={styles.notificationsCommunication}
          >{`Notifications & Communication:`}</h2>
          <div className={styles.conditionSplitterParent}>
            <div className={styles.conditionSplitter}>
              <div className={styles.stayUpdatedWith}>
                Stay updated with real-time notifications for skill-related
                events. Seamlessly communicate with colleagues using integrated
                email and messaging services.
              </div>
            </div>
            <b className={styles.decisionTree}>4</b>
          </div>
        </div>
      </div>
      <div className={styles.iterativeProcessor}>
        <div className={styles.valueComparators}>
          <div className={styles.variableAssigner}>
            <h1 className={styles.benefitsGaloreWith}>
              Benefits Galore with SkillMatrix
            </h1>
          </div>
          <div className={styles.efficiencyInsightsAnd}>
            Efficiency, Insights, and Growth: Discover How SkillMatrix Empowers
            You to Excel
          </div>
        </div>
      </div>
      <RuleApplier />
      <ValueTransformVisualizer />
      <DataComparator />
      <div className={styles.imageOverlay} />
    </div>
  );
};

export default LANDINGPAGE;


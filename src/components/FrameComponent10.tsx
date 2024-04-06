import { FunctionComponent } from "react";
import FrameComponent11 from "./FrameComponent11";
import styles from "./FrameComponent10.module.css";

const FrameComponent10: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.sidebarInstanceParent}>
        <div className={styles.sidebarInstance}>
          <b className={styles.topicproduct}>Topic/Product</b>
        </div>
        <div className={styles.enterTopicproductParent}>
          <div className={styles.enterTopicproduct}>Enter Topic/Product</div>
          <img className={styles.arrowDownIcon} alt="" src="/arrowdown.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <FrameComponent11
          domainTechnologyArea="Domain/Technology Area"
          enterDomainTechnologyArea="Enter Domain/Technology Area"
        />
        <FrameComponent11
          domainTechnologyArea="Sub-Domain/Technology"
          enterDomainTechnologyArea="Enter Sub-Domain/Technology Area"
          propMinWidth="unset"
        />
      </div>
      <div className={styles.frameContainer}>
        <FrameComponent11
          domainTechnologyArea="Training"
          enterDomainTechnologyArea="Select Yes or No"
          propMinWidth="89px"
        />
        <FrameComponent11
          domainTechnologyArea="Proficiency"
          enterDomainTechnologyArea="Select Proficiency"
          propMinWidth="118px"
        />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.certifiedWrapper}>
            <b className={styles.certified}>Certified</b>
          </div>
          <div className={styles.selectYesOrNoParent}>
            <div className={styles.selectYesOr}>Select Yes or No</div>
            <img
              className={styles.arrowDownIcon1}
              alt=""
              src="/arrowdown.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.certificationWrapper}>
            <b className={styles.certification}>Certification</b>
          </div>
          <input
            className={styles.frameChild}
            placeholder="Enter Certification Name"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;

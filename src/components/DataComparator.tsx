import { FunctionComponent } from "react";
import ChatBubble from "./ChatBubble";
import SearchBar from "./SearchBar";
import styles from "./DataComparator.module.css";

const DataComparator: FunctionComponent = () => {
  return (
    <footer className={styles.symbolInstances}>
      <div className={styles.styleProfiles}>
        <ChatBubble />
        <div className={styles.supportHelpdeskParent}>
          <div className={styles.supportHelpdesk}>{`Support & Helpdesk`}</div>
          <div className={styles.breakpoint}>
            <div className={styles.assignmentOperator}>
              <div className={styles.phone}>Phone:</div>
              <div className={styles.starShape}>043-5746-876</div>
            </div>
          </div>
          <SearchBar />
        </div>
        <div className={styles.quickLinksParent}>
          <div className={styles.quickLinks}>Quick Links</div>
          <div className={styles.home}>Home</div>
          <div className={styles.features}>Features</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.howItWorks}>How it Works</div>
          <div className={styles.benefits}>Benefits</div>
        </div>
        <div className={styles.socialMediaParent}>
          <div className={styles.socialMedia}>Social Media</div>
          <div className={styles.facebook}>Facebook</div>
          <div className={styles.twitter}>Twitter</div>
          <div className={styles.instagramParent}>
            <div className={styles.instagram}>Instagram</div>
            <div className={styles.linkedin}>LinkedIn</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DataComparator;


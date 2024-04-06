import { FunctionComponent } from "react";
import styles from "./DataComparator.module.css";

const DataComparator: FunctionComponent = () => {
  return (
    <footer className={styles.dataComparator}>
      <div className={styles.errorComparator}>
        <div className={styles.decisionComparator}>
          <div className={styles.patternComparator}>
            <div className={styles.ruleComparator}>
              <div className={styles.contactUs}>Contact Us</div>
              <div className={styles.torryHarrisIntegrated}>
                Torry Harris Integrated Solutions
              </div>
            </div>
            <div className={styles.connectionComparator}>
              <div className={styles.dataAggregator}>
                <div className={styles.address}>Address:</div>
                <a
                  className={styles.ground1st2nd}
                  href={`https://www.bing.com/ck/a?!&&p=5359e2e2624ba118JmltdHM9MTcxMDk3OTIwMCZpZ3VpZD0yNDZiNmY2MC0yYjg3LTZiOGUtMGU3Ny03Y2FjMmFkNTZhMGMmaW5zaWQ9NTczMQ&ptn=3&ver=2&hsh=3&fclid=246b6f60-2b87-6b8e-0e77-7cac2ad56a0c&u=a1L21hcHM_Jm1lcGk9MTI3fn5Vbmtub3dufkFkZHJlc3NfTGluayZ0eT0xOCZxPVRvcnJ5JTIwSGFycmlzJTIwSW50ZWdyYXRpb24lMjBTb2x1dGlvbnMmc3M9eXBpZC5ZTjQwNzB4MTg0MDExMjM1NzA1OTgzNTcwNDkmcHBvaXM9MTIuOTkxMjE1NzA1ODcxNTgyXzc3LjU5MzgxMTAzNTE1NjI1X1RvcnJ5JTIwSGFycmlzJTIwSW50ZWdyYXRpb24lMjBTb2x1dGlvbnNfWU40MDcweDE4NDAxMTIzNTcwNTk4MzU3MDQ5fiZjcD0xMi45OTEyMTZ-NzcuNTkzODExJnY9MiZzVj0xJkZPUk09TVBTUlBM&ntb=1`}
                  target="_blank"
                >
                  71, Ground, 1St, 2Nd, 3Rd, 4Th And 5Th Floor, Sona Towers,
                  Millers Road, Bangalore, Karnataka 560052
                </a>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.phoneParent}>
                  <div className={styles.phone}>Phone:</div>
                  <div className={styles.arcConnection}>044-546-576</div>
                </div>
                <div className={styles.emailParent}>
                  <div className={styles.email}>Email:</div>
                  <div className={styles.helptorryharriscom}>
                    help@torryharris.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.supportHelpdeskParent}>
          <div className={styles.supportHelpdesk}>{`Support & Helpdesk`}</div>
          <div className={styles.frameWrapper}>
            <div className={styles.phoneGroup}>
              <div className={styles.phone1}>Phone:</div>
              <div className={styles.starShape}>043-5746-876</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.emailGroup}>
              <div className={styles.email1}>Email:</div>
              <div className={styles.supporttorryharriscom}>
                support@torryharris.com
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quickLinksParent}>
          <div className={styles.quickLinks}>Quick Links</div>
          <div className={styles.home}>Home</div>
          <div className={styles.features}>Features</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.howItWorks}>How it Works</div>
          <div className={styles.benefits}>Benefits</div>
        </div>
        <div className={styles.cylinderComponent}>
          <div className={styles.socialMedia}>Social Media</div>
          <div className={styles.facebook}>Facebook</div>
          <div className={styles.twitter}>Twitter</div>
          <div className={styles.parallelogramComponent}>
            <div className={styles.instagram}>Instagram</div>
            <div className={styles.linkedin}>LinkedIn</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DataComparator;

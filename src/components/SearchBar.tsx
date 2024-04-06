import { FunctionComponent } from "react";
import styles from "./SearchBar.module.css";

const SearchBar: FunctionComponent = () => {
  return (
    <div className={styles.breakpoint}>
      <div className={styles.emailParent}>
        <div className={styles.email}>Email:</div>
        <div className={styles.supporttorryharriscom}>
          support@torryharris.com
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

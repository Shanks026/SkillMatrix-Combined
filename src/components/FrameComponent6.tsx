import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  topicProductWSO2Enterpris?: string;
  domainTechnologyAreaInter?: string;
  subDomainTechnologyESB?: string;

  /** Style props */
  domainTechnologyAreaPadding?: CSSProperties["padding"];
  domainTechnologyAreaWidth?: CSSProperties["width"];
  subDomainTechnologyESBAlignSelf?: CSSProperties["alignSelf"];
  deleteFILL0Wght400GRAD0OpAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onDeleteFILL0Wght400GRAD0OpsIconClick?: () => void;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  topicProductWSO2Enterpris,
  domainTechnologyAreaInter,
  subDomainTechnologyESB,
  domainTechnologyAreaPadding,
  domainTechnologyAreaWidth,
  subDomainTechnologyESBAlignSelf,
  deleteFILL0Wght400GRAD0OpAlignSelf,
  onDeleteFILL0Wght400GRAD0OpsIconClick,
}) => {
  const domainTechnologyAreasStyle: CSSProperties = useMemo(() => {
    return {
      padding: domainTechnologyAreaPadding,
      width: domainTechnologyAreaWidth,
    };
  }, [domainTechnologyAreaPadding, domainTechnologyAreaWidth]);

  const fillGradientsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: subDomainTechnologyESBAlignSelf,
    };
  }, [subDomainTechnologyESBAlignSelf]);

  const sidebarContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: deleteFILL0Wght400GRAD0OpAlignSelf,
    };
  }, [deleteFILL0Wght400GRAD0OpAlignSelf]);

  return (
    <div className={styles.topicProductWrapper}>
      <div className={styles.topicProduct}>
        <div
          className={styles.domainTechnologyAreas}
          style={domainTechnologyAreasStyle}
        >
          <div className={styles.topicproductWso2}>
            {topicProductWSO2Enterpris}
          </div>
          <div className={styles.fillGradients} style={fillGradientsStyle}>
            <div className={styles.domaintechnologyAreaInterWrapper}>
              <div className={styles.domaintechnologyArea}>
                {domainTechnologyAreaInter}
              </div>
            </div>
            <div
              className={styles.sidebarContainer}
              style={sidebarContainerStyle}
            >
              <div className={styles.subDomaintechnologyEsb}>
                {subDomainTechnologyESB}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.editFillGradients}>
          <img
            className={styles.editFill0Wght400Grad0Opsz2Icon}
            loading="lazy"
            alt=""
            src="/edit-fill0-wght400-grad0-opsz24-1.svg"
          />
          <img
            className={styles.deleteFill0Wght400Grad0OpsIcon}
            loading="lazy"
            alt=""
            src="/delete-fill0-wght400-grad0-opsz24-1.svg"
            onClick={onDeleteFILL0Wght400GRAD0OpsIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;

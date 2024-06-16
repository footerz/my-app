import { useState } from "react";

import "./ShotDetailsMenu.css";
import { Chevron } from "../../../../common/svg-icons/Chevron";
import { ExpandedComponent } from "../ExpandedComponent/ExpandedComponent";
import { Shot, SummaryStatistics } from "../../TopShotContainer";
import { formatPercentageValue } from "../../../../common/utils/formatPercentageValue";

export interface Stats {
  label: string;
  value: string;
  overall: string;
  cat: string;
}

interface ShotDetailsMenuProps {
  shot?: Shot;
  summaryStatistics?: SummaryStatistics;
}

export const ShotDetailsMenu: React.FC<ShotDetailsMenuProps> = ({
  shot,
  summaryStatistics,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isDetailsView, setIsDetailsView] = useState<boolean>(true);

  const stats: Array<Stats> = [
    {
      label: "Up & Down",
      value: formatPercentageValue(summaryStatistics?.upAndDownPercent),
      overall: summaryStatistics?.argQScore?.toFixed(0) || "-",
      cat: "ARG",
    },
    {
      label: "Sand Save",
      value: formatPercentageValue(summaryStatistics?.sandSavePercent),
      overall: summaryStatistics?.argQScore?.toFixed(0) || "-",
      cat: "ARG",
    },
    {
      label: "Fairways Hit",
      value: formatPercentageValue(summaryStatistics?.fairwaysHitPercent),
      overall: summaryStatistics?.ottQScore?.toFixed(0) || "-",
      cat: "TEE",
    },
    {
      label: "GIR",
      value: formatPercentageValue(summaryStatistics?.greensInRegPercent),
      overall: summaryStatistics?.ottQScore?.toFixed(0) || "-",
      cat: "TEE",
    },
    {
      label: "GIR",
      value: formatPercentageValue(summaryStatistics?.greensInRegPercent),
      overall: summaryStatistics?.appQScore?.toFixed(0) || "-",
      cat: "APP",
    },
    {
      label: "App. Proximity",
      value: `${summaryStatistics?.approachProximity?.toFixed(0)}ft`,
      overall: summaryStatistics?.appQScore?.toFixed(0) || "-",
      cat: "APP",
    },
  ];

  const filteredStats = stats?.filter(
    (stat) => stat?.cat === shot?.shotCategory
  );

  return (
    <div
      data-testid="shot-details-menu"
      className="shot-details-menu flex center"
      style={{
        height: isExpanded ? "12.5rem" : "2.375rem",
      }}
    >
      {isExpanded ? (
        <div className="flex column width-100">
          <div className="flex">
            <span
              className="tab"
              onClick={() => setIsDetailsView(true)}
              style={{
                backgroundColor: isDetailsView
                  ? "var(--lightGrey)"
                  : "var(--white)",
                cursor: isDetailsView ? "default" : "pointer",
                fontWeight: isDetailsView ? "bold" : "normal",
              }}
            >
              Shot Details
            </span>
            <span
              className="tab"
              onClick={() => setIsDetailsView(false)}
              style={{
                backgroundColor: !isDetailsView
                  ? "var(--lightGrey)"
                  : "var(--white)",
                cursor: !isDetailsView ? "default" : "pointer",
                fontWeight: !isDetailsView ? "bold" : "normal",
              }}
            >
              Statistics
            </span>
          </div>
          <ExpandedComponent
            isDetailsView={isDetailsView}
            shot={shot}
            filteredStats={filteredStats}
          />
        </div>
      ) : (
        <span className="shot-details">Shot Details & Statistics</span>
      )}
      <span
        className="menu-chevron flex"
        style={{
          transform: isExpanded ? "rotate(90deg)" : "rotate(270deg)",
          marginTop: isExpanded ? "0.375rem" : "0",
        }}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <Chevron color="var(--white)" />
      </span>
    </div>
  );
};

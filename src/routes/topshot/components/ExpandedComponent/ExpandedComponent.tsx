import { formatYardsToFeetInches } from "../../../../common/utils/formatYardsToFeetInches";
import { Shot } from "../../TopShotContainer";
import { FillBar } from "../Charts/FillBar";
import { Stats } from "../ShotDetailsMenu/ShotDetailsMenu";

import "./ExpandedComponent.css";

interface ExpandedComponentProps {
  isDetailsView: boolean;
  shot?: Shot;
  filteredStats: Array<Stats>;
}

export const ExpandedComponent: React.FC<ExpandedComponentProps> = ({
  isDetailsView,
  shot,
  filteredStats,
}) =>
  isDetailsView ? (
    <div>
      <div className="flex">
        <div className="flex column width-50">
          <p className="tab-text">
            Club: <span>{shot?.clubName}</span>
          </p>
          <p className="tab-text">
            Distance: <span>{shot?.shotDistance?.toFixed(0)}yds</span>
          </p>
          <p className="tab-text">
            From: <span>{shot?.shotStartLie}</span>
          </p>
          <p className="tab-text">
            Shot quality: <span>{shot?.shotQuality?.toFixed(0)}</span>
          </p>
        </div>
        <div className="flex column width-50">
          <p className="tab-text">&nbsp;</p>
          <p className="tab-text">
            To pin:{" "}
            <span>
              {formatYardsToFeetInches(shot?.shotEndDistance, shot?.shotEndLie)}
            </span>
          </p>
          <p className="tab-text">
            To: <span>{shot?.shotEndLie}</span>
          </p>
          <p className="tab-text">
            Shot category: <span>{shot?.shotCategory}</span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex column center">
      <p className="category-key">Last 20 rounds</p>
      <p className="category-label">Total {shot?.shotCategory} Quality</p>
      <FillBar
        fillColor={`var(--category${shot?.shotCategory})`}
        fillPercentage={parseInt(filteredStats?.[0]?.overall)}
      />
      <div className="flex category-container width-100">
        <p className="category-label flex column center">
          {filteredStats?.[0]?.label} <span>{filteredStats?.[0]?.value}</span>
        </p>
        <p className="category-label flex column center">
          {filteredStats?.[1]?.label} <span>{filteredStats?.[1]?.value}</span>
        </p>
      </div>
    </div>
  );

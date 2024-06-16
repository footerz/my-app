import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Map } from "./components/Map/Map";

import "./TopShot.css";
import { ShotDetailsMenu } from "./components/ShotDetailsMenu/ShotDetailsMenu";
import { Chevron } from "../../common/svg-icons/Chevron";

import { ShotQuality } from "./components/Charts/ShotQuality";
import { Shot, SummaryStatistics } from "./TopShotContainer";

interface TopShotProps {
  shot?: Shot;
  summaryStatistics?: SummaryStatistics;
}

export const TopShot: React.FC<TopShotProps> = ({
  shot,
  summaryStatistics,
}) => {
  const { id, holeId, shotId } = useParams();

  return (
    <div className="wrapper">
      <Link to={`/player/${id}`} data-testid="back-button">
        <div className="back-button flex">
          <span className="back-chevron flex center">
            <Chevron />
          </span>
          <span>Back</span>
        </div>
      </Link>
      <div className="hole-details-wrapper flex column">
        <p className="hole-details">West Byfleet GC</p>
        <p className="hole-details">Hole {holeId}</p>
        <p className="hole-details">Shot {shotId}</p>
      </div>
      <Map
        from={shot?.shotStartLie}
        to={shot?.shotEndLie}
        distance={shot?.shotDistance?.toFixed(0)}
      />
      {shot?.shotQuality && (
        <ShotQuality
          fillColor={`var(--category${shot?.shotCategory})`}
          fillDecimal={shot?.shotQuality / 100}
        />
      )}
      <ShotDetailsMenu summaryStatistics={summaryStatistics} shot={shot} />
    </div>
  );
};

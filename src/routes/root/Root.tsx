import "./Root.css";

import { ShotButton } from "./components/ShotButton/ShotButton";
import { Player } from "./components/Player/Player";
import { Shot } from "./RootContainer";

interface RootProps {
  topShots?: Array<Shot | undefined>;
}

export const Root: React.FC<RootProps> = ({ topShots }) => {
  return (
    <div className="wrapper">
      <Player name="Dan Footman" handicap={13} location="Surrey" />
      <ul>
        {topShots?.map((shot, i) => (
          <ShotButton
            key={i + 1}
            number={i + 1}
            course="West Byfleet GC"
            holeId={shot?.holeId}
            clubName={shot?.clubName}
            shotQuality={shot?.shotQuality}
            shotId={shot?.shotId}
            shotCategory={shot?.shotCategory}
          />
        ))}
      </ul>
    </div>
  );
};

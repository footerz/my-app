import df from "../../images/df.jpg";

import "./Player.css";

interface PlayerProps {
  name: string;
  handicap: number;
  location: string;
}

export const Player: React.FC<PlayerProps> = ({ name, handicap, location }) => {
  return (
    <div className="player-wrapper flex column">
      <img
        data-testid="player-avatar"
        src={df}
        alt=""
        title=""
        className="avatar"
      />
      <p className="player-name">{name}</p>
      <p className="player-detail">{handicap} Handicap</p>
      <p className="player-detail">{location}</p>
    </div>
  );
};

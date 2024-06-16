import React from "react";
import { Link } from "react-router-dom";

import { QualityBar } from "../QualityBar/QualityBar";
import { Chevron } from "../../../../common/svg-icons/Chevron";

import "./ShotButton.css";

interface ShotButtonProps {
  number: number;
  course: string;
  holeId?: number;
  clubName?: string;
  shotQuality?: number;
  shotId?: number;
  shotCategory?: string;
}

export const ShotButton: React.FC<ShotButtonProps> = ({
  number,
  course,
  holeId,
  clubName,
  shotQuality,
  shotId,
  shotCategory,
}) => {
  return (
    <li data-testid="top-shot-button">
      <Link to={`hole/${holeId}/shot/${shotId}`}>
        <div className="nav-button flex">
          <p className="flex column center">
            <span className="shot">Top Shot</span>
            <span className="flex number">{number}</span>
          </p>
          <p className="flex column">
            <span className="course-detail">{course}</span>
            <span className="course-detail"> Hole {holeId}</span>
            <span className="course-detail">{clubName}</span>
          </p>
          <span className="flex column center">
            <span className="shot-quality">Shot Quality</span>
            <QualityBar shotCategory={shotCategory} shotQuality={shotQuality} />
          </span>
          <span>
            <Chevron />
          </span>
        </div>
      </Link>
    </li>
  );
};

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetQualityStatistics } from "./queries/GetQualityStatistics";
import { GetShot } from "./queries/GetShot";
import { TopShot } from "./TopShot";

export interface SummaryStatistics {
  appQScore: number;
  approachProximity: number;
  argQScore: number;
  fairwaysHitPercent: number;
  greensInRegPercent: number;
  onePuttPercent: number;
  ottQScore: number;
  putQScore: number;
  qScore: number;
  sandSavePercent: number;
  scoringAverage: number;
  upAndDownPercent: number;
}

export interface Shot {
  clubName: string;
  holeId: number;
  isPenalty: boolean | null;
  isPickUp: boolean;
  shotCategory: string;
  shotDistance: number;
  shotEndDistance: number;
  shotEndLie: string;
  shotId: number;
  shotQuality: number;
  shotResult: string;
  shotStartDistance: number;
  shotStartLie: string;
}

export function Component() {
  const { id, holeId, shotId } = useParams();

  const {
    data: qualityStatistics,
    loading,
    error,
  } = useQuery(GetQualityStatistics, {
    variables: { id },
    skip: !id,
  });

  const { data: shotData } = useQuery(GetShot, {
    variables: {
      id,
      activityId: "18694831",
      holeId: typeof holeId === "string" && parseInt(holeId),
    },
    skip: !id || !holeId,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const shot: Shot | undefined =
    shotData?.userProfile?.playerAspects?.activity?.technical?.holeShots?.[
      Number(shotId) - 1
    ];
  const summaryStatistics: SummaryStatistics | undefined =
    qualityStatistics?.userProfile?.playerAspects?.summaryStatistics;

  return <TopShot shot={shot} summaryStatistics={summaryStatistics} />;
}

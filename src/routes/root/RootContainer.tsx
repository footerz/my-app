import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Root } from "./Root";
import { GetShots } from "./queries/GetShots";

export interface Shot {
  clubName: string;
  holeDistance: number;
  holeId: number;
  holePar: number;
  holeScore: number;
  shotCategory: string;
  shotDistance: number;
  shotEndLie: string;
  shotId: number;
  shotQuality: number;
  shotStartLie: string;
  shotType: string;
}

export const RootContainer = () => {
  const { id } = useParams();
  const {
    data: allShotData,
    loading,
    error,
  } = useQuery(GetShots, {
    variables: {
      id,
      activityId: "18694831",
    },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const shots: Array<Shot | undefined> | undefined | null =
    allShotData?.userProfile?.playerAspects?.activity?.technical?.shots;

  //these are hard coded and not ordered by shot quality because I wanted 3 different visuals and categories as a demo
  const topShot1 = shots?.[2];
  const topShot2 = shots?.[21];
  const topShot3 = shots?.[56];
  const topShots = [topShot1, topShot2, topShot3];

  return <Root topShots={topShots} />;
};

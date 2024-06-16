import { gql } from "@apollo/client";

export const GetQualityStatistics = gql`
  query GetPlayerQualityTrends($id: ID!) {
    userProfile(id: $id) {
      id
      playerAspects {
        id
        summaryStatistics {
          appQScore
          approachProximity
          argQScore
          fairwaysHitPercent
          greensInRegPercent
          onePuttPercent
          ottQScore
          putQScore
          qScore
          sandSavePercent
          scoringAverage
          upAndDownPercent
        }
      }
    }
  }
`;

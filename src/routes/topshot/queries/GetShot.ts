import { gql } from "@apollo/client";

export const GetShot = gql`
  query GetPlayerHoleShotQualityHistoryScores(
    $id: ID!
    $activityId: ID!
    $holeId: Int!
  ) {
    userProfile(id: $id) {
      id
      playerAspects {
        activity(activityId: $activityId) {
          technical {
            holeShots(holeId: $holeId) {
              clubName
              holeId
              isPenalty
              isPickUp
              shotCategory
              shotDistance
              shotEndDistance
              shotEndLie
              shotId
              shotQuality
              shotResult
              shotStartDistance
              shotStartLie
            }
          }
        }
      }
    }
  }
`;

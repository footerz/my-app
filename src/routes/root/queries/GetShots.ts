import { gql } from "@apollo/client";

export const GetShots = gql`
  query getActivity($id: ID!, $activityId: ID!) {
    userProfile(id: $id) {
      id
      playerAspects {
        activity(activityId: $activityId) {
          technical {
            shots {
              clubName
              holeDistance
              holeId
              holePar
              holeScore
              isExcludedSIMShot
              shotCategory
              shotDistance
              shotEndLie
              shotId
              shotQuality
              shotStartLie
              shotType
            }
          }
        }
      }
    }
  }
`;

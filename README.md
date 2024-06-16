# Top Shots widget innovation project

This app displays a players top 3 best shots and their statistics.

## Install

In the project directory, you can run:

1. `yarn install`
2. Rename env.example -> env.local
3. Update token within env.local. The bearer token that needs to be used can be obtained from app.clippd.com.

## Run app in development mode

`yarn start`

Visit home page
http://localhost:3000/player/{playerId} //example playerId = dcab3e25bcf943dbbb60fe840261a810

Deep link to a specific hole and shot
http://localhost:3000/player/{playerId}/hole/{holeNo}/shot/{shotNo}

## Jest test coverage

To run the tests
`yarn test`

## PlayWright e2e test coverage

NOTE: Ensure the app is running with `yarn start` and you have a working env token before executing.

To run the tests in headless mode
`yarn playwright test`

To run the tests in UI mode
`yarn playwright test --ui`

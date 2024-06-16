import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./error-page";
import { RootContainer } from "./routes/root/RootContainer";

const httpLink = createHttpLink({
  uri: "https://app.clippd.com/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    path: "/player/:id", //id = dcab3e25bcf943dbbb60fe840261a810
    element: <RootContainer />,
  },
  {
    path: "/player/:id/hole/:holeId/shot/:shotId",
    lazy: () => import("./routes/topshot/TopShotContainer"),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

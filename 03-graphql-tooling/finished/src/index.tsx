import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pet-library.moonhighway.com",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

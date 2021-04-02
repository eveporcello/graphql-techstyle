import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import { Cabins, CabinPhoto } from "./Cabins";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://clam-api.moonhighway.com",
  cache: new InMemoryCache()
});

function App() {
  const [selectedCabin, setSelectedCabin] = useState(null);

  function onCabinSelected({ target }) {
    setSelectedCabin(target.value);
  }

  return (
    <div>
      <h2>Camp Lambda Cabins 🏕</h2>
      {selectedCabin && (
        <CabinPhoto animal={selectedCabin} />
      )}
      <Cabins onCabinSelected={onCabinSelected} />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

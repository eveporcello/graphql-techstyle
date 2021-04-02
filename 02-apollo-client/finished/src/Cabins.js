import { gql, useQuery } from "@apollo/client";

const CABIN_QUERY = gql`
  query Cabins {
    allCabins {
      animal
    }
  }
`;

const CABIN_PHOTO_QUERY = gql`
  query($animal: ID!) {
    findCabinByAnimal(animal: $animal) {
      animal
      photo {
        full
      }
    }
  }
`;

export function CabinPhoto({ animal }) {
  const {
    loading,
    data,
    refetch,
    networkStatus
  } = useQuery(CABIN_PHOTO_QUERY, {
    fetchPolicy: "no-cache",
    variables: { animal },
    notifyOnNetworkStatusChange: true
    // pollInterval: 500
  });

  if (networkStatus === 4) return <p>Getting new cabin!</p>;
  if (loading) return null;

  return (
    <div>
      <div>
        <img
          src={data.findCabinByAnimal.photo.full}
          style={{ height: 100, width: 100 }}
        />
      </div>
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}

export function Cabins({ onCabinSelected }) {
  const { loading, data } = useQuery(CABIN_QUERY);

  if (loading) return "Loading...";

  return (
    <select name="cabin" onChange={onCabinSelected}>
      {data.allCabins.map(cabin => (
        <option key={cabin.animal} value={cabin.animal}>
          {cabin.animal}
        </option>
      ))}
    </select>
  );
}

import { useQuery } from "@apollo/client";
import petQuery from "./queries/petQuery";
import { AllPets } from "./queries/types/AllPets";

const App: React.FC = () => {
  const { loading, data } = useQuery<AllPets>(petQuery);
  if (loading) return <p>Loading...</p>;
  return (
    <section>
      <h1>Pet Library Pets</h1>
      {data && !loading && (
        <div>
          {data.allPets.map(pet => (
            <h2>{pet.name}</h2>
          ))}
        </div>
      )}
    </section>
  );
};

export default App;

import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const QUERY = gql`
  query CounselorInformation {
    allCounselors {
      id
      name
      rank
      photo {
        thumb
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(QUERY);
  if (loading) return <p>Loading...</p>;
  return (
    <Container>
      <div className="counselors">
        {data.allCounselors.map((counselor, i) => (
          <div className="card">
            <img
              src={counselor.photo.thumb}
              alt={counselor.name}
            />
            <h2>{counselor.name}</h2>
            <p>{counselor.rank.replace("_", " ")}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  grid-template-rows: 100px 60px auto;
  .counselors {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-column-start: 2;
    .thumbnail {
      justify-self: center;
      height: 16em;
      width: 16em;
      margin: 1em;
    }
    img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    .card {
      background-color: #fafafc;
      align-items: center;
      border: 1px solid #d3d3d3;
    }
  }
`;

export default App;

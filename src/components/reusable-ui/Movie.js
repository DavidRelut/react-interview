import styled from 'styled-components';

export default function Movie({ movieData }) {

  return (
    <MovieStyled>
      <div className="movieCard">
        <h1>{movieData.title}</h1>
        <p className="category">{movieData.category}</p>
        <div className="button">
          <button>like: {movieData.likes}</button>
          <button>dislikes: {movieData.dislikes}</button>
        </div>
      </div>
    </MovieStyled>
  );
}

const MovieStyled = styled.div`
  .movieCard {
    border: 1px solid blue;
    margin: 20px;
    padding: 20px;
    background: lightblue;
    border-radius: 5px;
    width: 310px;
    height: 200px;
    text-align: center;
  }

  h1 {
    color: darkblue;
  }

  .category {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    background: #f487b6;
    display: inline-block;
    color: white;
    padding: 8px 15px;
    border-radius: 15px;
  }

  .button {
    display: flex;
    justify-content: space-evenly;
    padding: 15px 15px;
  }

  p {
    color: blue;
  }
`;

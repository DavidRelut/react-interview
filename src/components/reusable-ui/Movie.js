import styled from 'styled-components';

export default function Movie({
  movieData,
  handleDelete,
  handleLike,
  handleDislike,
  activeBtn,
}) {

  return (
    <MovieStyled>
      <div className="movieCard">
        <button
          onClick={() => handleDelete(movieData.id)}
          className="btnDelete">
          X
        </button>
        <h1>{movieData.title}</h1>
        <p className="category">{movieData.category}</p>
        <div className="button">
          <button
            onClick={() => handleLike(movieData.id)}
            className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`}>
            <span className="material-symbols-rounded">thumb_up</span>
            Like {movieData.likes}
          </button>
          <button
            onClick={() => handleDislike(movieData.id)}
            className={`btn ${
              activeBtn === 'dislike' ? 'dislike-active' : ''
            }`}>
            <span className="material-symbols-rounded">thumb_down</span>
            Dislike {movieData.dislikes}
          </button>
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
    position: relative;
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

  button {
    cursor: pointer;
  }

  .button {
    display: flex;
    justify-content: space-evenly;
    padding: 15px 15px;
  }

  .btnDelete {
    position: absolute;
    top: 5%;
    right: 8%;
    color: brown;
  }

  p {
    color: blue;
  }

  // Button toggle like/dislike

  .btn-container {
    display: flex;
    flex-direction: 'row';
    align-items: center;
    background-color: #fff;
    padding: 30px 50px;
    border-radius: 12px;
  }

  .btn {
    border: none;
    color: #fff;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: #bdc0c5;
    border-radius: 4px;
    padding: 6px 15px;
    margin: 0 10px;
  }

  .like-active {
    background-color: #ff0063;
  }

  .dislike-active {
    background-color: #394350;
  }
`;

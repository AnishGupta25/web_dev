import React from "react";
import Filter from "./Filter";
import Nav from "./Nav";

class App extends React.Component {
  state = {
    movies: [],
    genre: [],
  };

  componentDidMount() {
    let f = async () => {
      let responseGenre = await fetch("/genre");
      let responseMovies = await fetch("/movies");
      let moviesJson = await responseMovies.json();
      let genreJson = await responseGenre.json();

      this.setState({
        movies: moviesJson,
        genre: genreJson,
      });
    };

    f();
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <Filter genreData = {this.state.genre}/>
        </div>
      </div>
    );
  }
}

export default App;
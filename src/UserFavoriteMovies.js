import React, {Component} from 'react';
import ShowMovie from './ShowMovie.js';

class UserFavoriteMovies extends Component {
  render() {
	const { moviesUserMapping, users, movies } = this.props;
    const usersLikes = Object.keys(movies).map(key => (
      <ShowMovie
      	key={key}
        movieName={movies[key].name}
        users={users}
        moviesUserMapping={moviesUserMapping[movies[key].name]}
      />
    ))
    return <ul>{usersLikes}</ul>
  }
}

export default UserFavoriteMovies;
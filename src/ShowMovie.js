import React, {Component} from 'react';

class ShowMovie extends Component {
	render () {
      const {movieName, users, moviesUserMapping} = this.props;
      	return (
     	<div> <h2>{movieName}</h2>
          {!moviesUserMapping || moviesUserMapping.length === 0 ? (<p>None of the current users liked this movie.</p>) : (
        	<div><p>Liked By:</p><ul>{moviesUserMapping.map((user) => (
     			<li key={parseInt(user)}>{users[parseInt(user)].name}</li>
      		))}
			</ul></div>
			)}
  		</div>
      )
	}
}

export default ShowMovie;
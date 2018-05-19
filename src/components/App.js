import React from 'react'
import MovieItem from './MovieItem'

import { movies } from './movies'

class MoviesList extends React.Component {
  state = {
    movies: movies,
  }

  render () {
    return (
      <div className="row">
        {this.state.movies.map(item => {
          return (
            <div className="col-6 mb-4">
              <MovieItem item={item} addLike={this.props.addLike} unLike={this.props.unLike} />
            </div>
          )
        })}
      </div>
    )
  }
}

const LikeCounts = ({counts}) => {
  return (
    <p>Count of likes: {counts}</p>
  )
}

class App extends React.Component {
  state = {
    counts: 0,
  }

  addLike = () => {
    this.setState({
      counts: this.state.counts + 1,
    })
  }

  unLike = () => {
    this.setState({
      counts: this.state.counts - 1,
    })
  }

  render () {
    return (
      <div className="container">
        <LikeCounts counts={this.state.counts}/>
        <MoviesList
          addLike={this.addLike}
          unLike={this.unLike}
          items={this.state.movies}
        />
      </div>
    )
  }
}

export default App

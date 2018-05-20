import React from 'react'
import LikeCounts from './LikeCounts'
import MoviesList from './MoviesList'
import { movies } from './movies'
import FavoriteList from './FavoriteList'
import FavoriteCounts from './FavoriteCounts'

class App extends React.Component {
  state = {
    counts: 0,
    favourites: []
  }

  addFavorite = (item) => {
    this.setState({
      favourites: [...this.state.favourites, item],
    })
  }

  removeFavorite = (id) => {
    const favoriteIndex = this.findFavoriteIndex(id)
    if (favoriteIndex > -1) {
      let favorites = [...this.state.favourites]
      favorites.splice(favoriteIndex, 1)
      this.setState({
        favourites: favorites,
      })
    }
  }

  findFavoriteIndex = (id) => this.state.favourites.findIndex((item) => item.id === id)

  isMovieFavorite = (id) => this.findFavoriteIndex(id) > -1

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
        <div className="row">
          <div className="col-10">
            <LikeCounts counts={this.state.counts}/>
            <MoviesList
              addLike={this.addLike}
              unLike={this.unLike}
              items={movies}
              removeFavorite={this.removeFavorite}
              addFavorite={this.addFavorite}
            />
          </div>
          <div className="col-2">
            <FavoriteCounts counts={this.state.favourites.length}/>
            <FavoriteList items={this.state.favourites}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App

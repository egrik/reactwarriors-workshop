import React from 'react'
import MovieItem from './MovieItem'

export default class extends React.Component {
  render () {
    return (
      <div className="row">
        {this.props.items.map(item => {
          return (
            <div className="col-6 mb-4">
              <MovieItem
                item={item}
                addLike={this.props.addLike}
                unLike={this.props.unLike}
                removeFavorite={this.props.removeFavorite}
                addFavorite={this.props.addFavorite}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
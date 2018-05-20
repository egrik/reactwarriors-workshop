import React from 'react'
import MovieItem from './MovieItem'

export default class extends React.Component {
  render () {
    const {unLike, addLike, removeFavorite, addFavorite} = this.props

    return (
      <div className="row">
        {this.props.items.map(item => {
          return (
            <div className="col-6 mb-4">
              <MovieItem
                item={item}
                addLike={addLike}
                unLike={unLike}
                removeFavorite={removeFavorite}
                addFavorite={addFavorite}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
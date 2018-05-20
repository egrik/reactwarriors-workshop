import React from 'react'

class MovieItem extends React.Component {
  state = {
    show: false,
    isLiked: false,
    isFavorite: false
  }

  toggleShowOverview = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  likeHandler = (evt) => {
    if (this.state.isLiked) {
      this.props.unLike()
    }
    else {
      this.props.addLike()
    }

    this.setState({
      isLiked: !this.state.isLiked,
    })
  }

  favoriteHandler = (evt) => {
    const {item = {}, removeFavorite, addFavorite} = this.props

    if (this.state.isFavorite) {
      removeFavorite(item.id)
    }
    else {
      addFavorite(item)
    }

    this.setState({
      isFavorite: !this.state.isFavorite,
    })
  }

  render () {
    const {item = {}} = this.props
    return (
      <div className="card">
        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt=""/>
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
          </div>
          <div>
            <button
              className={'btn btn-' + (this.state.show ? 'warning' : 'primary')}
              onClick={this.toggleShowOverview}
            >
              {this.state.show ? 'Hide overview' : 'Show overview'}
            </button>
          </div>
          <div>{this.state.show ? <p>{item.overview}</p> : null}</div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.likeHandler}
            >
              {this.state.isLiked ? 'Unlike' : 'Like'}
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.favoriteHandler}
            >
              {this.state.isFavorite ? 'Remove from favorite' : 'Add to favorite'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieItem
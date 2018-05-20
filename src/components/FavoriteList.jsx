import React from 'react'
import FavoriteItem from './FavoriteItem'

export default class extends React.Component {
  render () {
    return (
      this.props.items.map((item) => (
        <FavoriteItem item={item}/>
      ))
    )
  }
}
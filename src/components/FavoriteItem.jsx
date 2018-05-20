import React from 'react'

export default class extends React.Component {
  render () {
    const {item = {}} = this.props
    
    return (
      <div>
        {item.title} ({item.vote_average})
      </div>
    )
  }
}
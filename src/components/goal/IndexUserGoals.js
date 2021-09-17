import React from 'react'
import { withRouter } from 'react-router-dom'

class IndexUserGoals extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      goals: null
    }
  }

  render () {
    return (
      <h1>hello there</h1>
    )
  }
}
export default withRouter(IndexUserGoals)

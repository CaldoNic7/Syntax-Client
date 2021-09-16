import React from 'react'
import { withRouter } from 'react-router-dom'

// import Form from 'react-bootstrap/Form'
import { Button, Card } from 'react-bootstrap'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      goals: null,
      languages: null
    }
  }

  render () {
    return (
      <>
        <h1>display language icons here</h1>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Button onClick={() => this.props.history.push('/goal-create/')}>Set Goal</Button>
          <Button onClick={() => this.props.history.push('/change-pw/')}>Change Password</Button>
          <Button onClick={() => this.props.history.push('/sign-out/')}>Sign Out</Button>
        </div>
        <Card>
          <h1>goal 1</h1>
        </Card>
        <Card>
          <h1>goal 2</h1>
        </Card>
      </>
    )
  }
}

export default withRouter(Dashboard)

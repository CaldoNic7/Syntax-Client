import React from 'react'
import { withRouter } from 'react-router-dom'
import { indexUserGoals, showGoal, updateGoal } from '../../api/goal_crud'

// import Form from 'react-bootstrap/Form'
import { Button, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      goals: null,
      goalToUpdate: null,
      languages: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    indexUserGoals(user)
      .then(res => this.setState({ goals: res.data.goals }))
      .then(() => msgAlert({ heading: 'Success', message: 'Here are your goals', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Index failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  show = (goal) => {
    const { user, msgAlert } = this.props
    showGoal(user, goal.id)
      .then(() => {
        this.setState({ goalToUpdate: goal })
      })
      .catch(err => msgAlert({ heading: 'Show failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    const goalCopy = Object.assign({}, this.state.goalToUpdate)
    goalCopy[inputName] = inputValue
    this.setState({ goalToUpdate: goalCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const goal = this.state.goalToUpdate
    console.log('this is the goal inside of handleSubmit', goal)
    const { user, msgAlert } = this.props
    updateGoal(user, goal.id, goal)
      .then(() => {
        indexUserGoals(user)
          .then(res => this.setState({
            goals: res.data.goals,
            goalToUpdate: null
          }))
          .then(() => msgAlert({ heading: 'Success', message: 'Here are your goals', variant: 'success' }))
          .catch(err => msgAlert({ heading: 'Index failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
      })
      // .then(res => this.setState({ goals: res.data.goals }))
      .catch(error => {
        msgAlert({ heading: 'Goal update failed', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
  }

  render () {
    const { goals } = this.state
    if (this.state.goals === null) {
      return (<p>Loading...</p>)
    }
    let goalsJsx
    let updateGoalJsx
    const goalsArray = []
    if (goals.length === 0) {
      goalsJsx = <p> No Goals Set</p>
    } else {
      goals.forEach(goal => {
        goalsArray.push(goal)
        if (this.state.goalToUpdate !== null && goal.id === this.state.goalToUpdate.id) {
          goalsArray.pop(goal)
          // eslint-disable-next-line camelcase
          const { name, chars_per_min, language, target_date, practice_num, measurement, frequency } = this.state.goalToUpdate
          updateGoalJsx = (
            <Card>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='name' style={{ marginTop: '9px' }}>
                  <Form.Control
                    required
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='chars_per_min' style={{ marginTop: '9px' }}>
                  <p>I want to type </p>
                  <Form.Control
                    required
                    name='chars_per_min'
                    // eslint-disable-next-line camelcase
                    value={chars_per_min}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='language' style={{ marginTop: '9px' }}>
                  <p> words per minute in</p>
                  <Form.Control
                    required
                    name='language'
                    value={language}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='target_date' style={{ marginTop: '9px' }}>
                  <p>, by</p>
                  <Form.Control
                    required
                    name='target_date'
                    // eslint-disable-next-line camelcase
                    value={target_date}
                    onChange={this.handleChange}
                  /><p>.</p>
                </Form.Group>
                <Form.Group controlId='practice_num' style={{ marginTop: '9px' }}>
                  <p>I will achieve this goal by practicing</p>
                  <Form.Control
                    required
                    name='practice_num'
                    // eslint-disable-next-line camelcase
                    value={practice_num}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group
                  controlId='measurement' style={{ marginTop: '6px', marginBottom: '5px' }}>
                  <Form.Control
                    required
                    name='measurement'
                    value={measurement}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group
                  controlId='frequency' style={{ marginTop: '6px', marginBottom: '5px' }}>
                  <p>every</p>
                  <Form.Control
                    required
                    name='frequency'
                    value={frequency}
                    onChange={this.handleChange}
                  /><p>.</p>
                </Form.Group>
                <div style={{ marginLeft: '12px' }}>
                  <Button
                    type='submit'
                    style={{ marginTop: '11px' }}>Submit
                  </Button>
                </div>
              </Form>
            </Card>
          )
        }
      })
      goalsJsx = goalsArray.map((goal) => (
        <Card key={goal.id} onClick={() => this.show(goal)}>
          <Card.Body>
            <Card.Title >{goal.name}</Card.Title>
            <Card.Text>I want to type {goal.char_per_min} words per minute in {goal.language}, by {goal.target_date}. I will achieve this goal by practicing {goal.practice_num} {goal.measurement} every {goal.frequency}.</Card.Text>
          </Card.Body>
        </Card>
      ))
    }
    return (
      <>
        <h1>display language icons here</h1>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Button onClick={() => this.props.history.push('/goal-create/')}>Set Goal</Button>
          <Button onClick={() => this.props.history.push('/change-pw/')}>Change Password</Button>
          <Button onClick={() => this.props.history.push('/sign-out/')}>Sign Out</Button>
        </div>
        <div>
          {updateGoalJsx}
          {goalsJsx}
        </div>
      </>
    )
  }
}

export default withRouter(Dashboard)
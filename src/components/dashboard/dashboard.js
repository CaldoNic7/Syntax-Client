import React from 'react'
import { withRouter } from 'react-router-dom'
import { indexUserGoals, showGoal, updateGoal, deleteGoal } from '../../api/goal_crud'
import moment from 'moment'

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
    if (user !== null) {
      indexUserGoals(user)
        .then(res => this.setState({ goals: res.data.goals }))
        .then(() => msgAlert({ heading: 'Success', message: 'Here are your goals', variant: 'success' }))
        .catch(err => msgAlert({ heading: 'Index failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
    }
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

  delete = (goalId) => {
    const { user, msgAlert } = this.props
    deleteGoal(user, goalId)
      .then(() => {
        const newGoals = Object.assign({}, this.state)
        newGoals.goals = newGoals.goals.filter(goal => goal.id !== goalId)
        this.setState({
          goals: newGoals.goals,
          goalToUpdate: null
        })
      })
      .then(() => msgAlert({ heading: 'Delete success', message: 'Chord deleted', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Delete failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  daysRemaining = (goal) => {
    const dueDate = moment(goal.date)
    return moment(dueDate).endOf('day').fromNow()
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
          const { name, characters, language, date, time, measurement, frequency } = this.state.goalToUpdate
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
                <Form.Group controlId='characters' style={{ marginTop: '9px' }}>
                  <p>I want to type </p>
                  <Form.Control
                    required
                    name='characters'
                    value={characters}
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
                <Form.Group controlId='date' style={{ marginTop: '9px' }}>
                  <p>, by</p>
                  <Form.Control
                    required
                    name='date'
                    value={date}
                    onChange={this.handleChange}
                  /><p>.</p>
                </Form.Group>
                <Form.Group controlId='time' style={{ marginTop: '9px' }}>
                  <p>I will achieve this goal by practicing</p>
                  <Form.Control
                    required
                    name='time'
                    value={time}
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
                  <Button type='submit' style={{ marginTop: '11px' }}>Submit</Button>
                  <Button onClick={() => this.delete(goal.id)} style={{ marginRight: '6px' }}>Delete</Button>
                </div>
              </Form>
            </Card>
          )
        }
      })
      goalsJsx = goalsArray.map((goal) => (
        <Card key={goal.id} onClick={() => this.show(goal)}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>{goal.name}: {goal.language}</Card.Title>
              <Card.Title>Due {this.daysRemaining(goal)}.</Card.Title>
            </div>
            {/* <Card.Text>I want to type {goal.characters} words per minute in {goal.language}, by {goal.date}. I will achieve this goal by practicing {goal.time} {goal.measurement} every {goal.frequency}.</Card.Text> */}
          </Card.Body>
        </Card>
      ))
    }
    return (
      <>
        {/* <h1>display language icons here</h1> */}
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Button style={{ margin: '5px' }} onClick={() => this.props.history.push('/create-goal/')}>Set Goal</Button>
            <Button style={{ margin: '5px' }} onClick={() => this.props.history.push('/change-pw/')}>Change Password</Button>
            <Button style={{ margin: '5px' }} onClick={() => this.props.history.push('/sign-out/')}>Sign Out</Button>
          </div>
        </Card>
        <div>
          {updateGoalJsx}
          {goalsJsx}
        </div>
      </>
    )
  }
}

export default withRouter(Dashboard)

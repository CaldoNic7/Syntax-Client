import React from 'react'
import { withRouter } from 'react-router-dom'
import { createGoal } from './../../api/goal_crud'

// import Form from 'react-bootstrap/Form'
import Form from 'react-bootstrap/Form'
import { Button, Card } from 'react-bootstrap'

class CreateGoal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      goal: {
        name: 'Goal 1',
        characters: '60',
        language: 'JavaScript',
        date: '2022-05-05',
        time: '60',
        measurement: 'min',
        frequency: 'day'
      }
    }
  }

    handleChange = (event) => {
      const inputName = event.target.name
      const inputValue = event.target.value
      const goalCopy = Object.assign({}, this.state.goal)
      goalCopy[inputName] = inputValue
      this.setState({
        goal: goalCopy
      })
    }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, msgAlert, history } = this.props
    createGoal(user, this.state.goal)
      .then(res => history.push('/'))
      .catch(error => {
        msgAlert({ heading: 'Goal creation failed', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
  }

  render () {
    // eslint-disable-next-line camelcase
    const { name, characters, language, date, time, measurement, frequency } = this.state.goal
    return (
      <>
        <div>
          <h1 style={{ margin: '0 auto' }}>Set a SMART goal to track your growth!</h1>
        </div>
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
                // eslint-disable-next-line camelcase
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
                // eslint-disable-next-line camelcase
                value={date}
                onChange={this.handleChange}
              /><p>.</p>
            </Form.Group>
            <Form.Group controlId='time' style={{ marginTop: '9px' }}>
              <p>I will achieve this goal by practicing</p>
              <Form.Control
                required
                name='time'
                // eslint-disable-next-line camelcase
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
              <Button
                type='submit'
                style={{ marginTop: '11px' }}>Submit
              </Button>
            </div>
          </Form>
        </Card>
      </>
    )
  }
}

export default withRouter(CreateGoal)

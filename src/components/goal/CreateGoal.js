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
        chars_per_min: '60',
        language: 'JavaScript',
        target_date: '2022-05-05',
        practice_num: '60',
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
    console.log(this.state.goal)
    const { user, msgAlert, history } = this.props
    createGoal(user, this.state.goal)
      .then(res => history.push('/'))
      .catch(error => {
        msgAlert({ heading: 'Goal creation failed', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
  }

  render () {
    // eslint-disable-next-line camelcase
    const { name, chars_per_min, language, target_date, practice_num, measurement, frequency } = this.state.goal
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
      </>
    )
  }
}

export default withRouter(CreateGoal)

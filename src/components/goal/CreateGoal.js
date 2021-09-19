import React from 'react'
import { withRouter } from 'react-router-dom'
import { createGoal } from '../../api/goal_crud'

// import Form from 'react-bootstrap/Form'
import Form from 'react-bootstrap/Form'
import { Button, Card } from 'react-bootstrap'
import { goalCard, goalTitle, goalForm, nameGroup, charGroup, langGroup, dateGroup, timeGroup, measureGroup, freqGroup, goalPara } from './create_goal_styles'

class CreateGoal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      goal: {
        name: 'Goal 1',
        characters: '77',
        language: 'Clingon',
        date: '2022-05-05',
        time: '30',
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
      .then(res => history.push('/dashboard'))
      .catch(error => {
        msgAlert({ heading: 'Goal creation failed', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
  }

  render () {
    const { name, characters, date, time } = this.state.goal
    return (
      <>
        <h1 style={goalTitle}>Set a goal to track your growth!</h1>
        <Card style={goalCard}>
          <Form style={ goalForm }onSubmit={this.handleSubmit}>
            <h4> { <Form.Group controlId='name' style={nameGroup}>
              <Form.Control
                required
                name='name'
                value={name}
                onChange={this.handleChange}
              />
            </Form.Group> } </h4>
            <p style={goalPara}> I want to type
              { <Form.Group controlId='characters' style={charGroup}>
                <Form.Control type="number"
                  className="form-control"
                  name='characters'
                  defaultValue={ characters }
                  min={ 0 }
                  max={ 200 }
                  step={ 1 }
                  precision={ 0 }
                  onChange={this.handleChange}
                />
              </Form.Group> } characters per minute in { <Form.Group controlId='language' style={ langGroup }>
                <Form.Control as="select" required name='language' onChange={this.handleChange}>
                  <option>Select Coding Language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                </Form.Control>
              </Form.Group> } by { <Form.Group controlId='date' style={ dateGroup }>
                <Form.Control type="date" name="date" defaultValue={ date } onChange={this.handleChange}/>
              </Form.Group> } I will achieve this goal by practicing { <Form.Group controlId='time' style={ timeGroup }>
                <Form.Control type="number"
                  className="form-control"
                  name='time'
                  defaultValue={ time }
                  min={ 10 }
                  max={ 120 }
                  step={ 1 }
                  precision={ 0 }
                  onChange={this.handleChange}
                />
              </Form.Group> } { <Form.Group
                controlId='measurement' style={ measureGroup }>
                <Form.Control
                  as='select'
                  required
                  name='measurement'
                  onChange={this.handleChange}>
                  <option>Select Unit of Measure</option>
                  <option value='minute(s)'>{ 'minute(s)' }</option>
                  <option value='hour(s)'>{ 'hours(s)' }</option>
                  <option value='day(s)'>{ 'days(s)' }</option>
                </Form.Control>
              </Form.Group> } every { <Form.Group
                controlId='frequency' style={ freqGroup }>
                <Form.Control
                  as='select'
                  required
                  name='frequency'
                  onChange={this.handleChange}>
                  <option>Select Frequency</option>
                  <option value='day'>{ 'day' }</option>
                  <option value='week'>{ 'week' }</option>
                  <option value='month'>{ 'month' }</option>
                </Form.Control>
              </Form.Group> } </p>
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

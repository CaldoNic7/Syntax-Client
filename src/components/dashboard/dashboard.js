import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { indexUserGoals, showGoal, updateGoal, deleteGoal } from '../../api/goal_crud'
import moment from 'moment'
import { ReactComponent as JsIcon } from './JsIcon.svg'
import { ReactComponent as PyIcon } from './PyIcon.svg'
import { ReactComponent as CssIcon } from './CssIcon.svg'
import { ReactComponent as HtmlIcon } from './HtmlIcon.svg'
import { ReactComponent as KlingIcon } from './KlingIcon.svg'

// import from 'react-bootstrap'
import { Button, Card, Form } from 'react-bootstrap'

import { goalForm, nameGroup, charGroup, langGroup, dateGroup, timeGroup, measureGroup, freqGroup, goalPara, input } from './../goal/create_goal_styles'
import { container, goalStatCard, languageCard, newGoalLink, updateGoalCard } from './dashboard_styles'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      goals: null,
      goalToUpdate: null
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

  iconJsxSetter = (goal, languagesJsx) => {
    const jsIconJsx = <JsIcon width='100' height='100' />
    const pyIconJsx = <PyIcon width='100' height='100' />
    const cssIconJsx = <CssIcon width='100' height='100' />
    const htmlIconJsx = <HtmlIcon width='100' height='100' />
    const klingIconJsx = <KlingIcon width='100' height='100' />
    if (goal === 'JavaScript') {
      languagesJsx.push(jsIconJsx)
    } else if (goal === 'Python') {
      languagesJsx.push(pyIconJsx)
    } else if (goal === 'CSS') {
      languagesJsx.push(cssIconJsx)
    } else if (goal === 'HTML') {
      languagesJsx.push(htmlIconJsx)
    } else if (goal === 'Klingon') {
      languagesJsx.push(klingIconJsx)
    }
  }
  // for later version...
  // iconJsxSetter = (goal, languages, languagesJsx) => {
  //   const jsIconJsx = <Button style={langButton}><JsIcon width='100' height='100' /></Button>
  //   const pyIconJsx = <Button style={langButton}><PyIcon width='100' height='100' /></Button>
  //   const cssIconJsx = <Button style={langButton}><CssIcon width='100' height='100' /></Button>
  //   const htmlIconJsx = <Button style={langButton}><HtmlIcon width='100' height='100' /></Button>
  //   const klingIconJsx = <Button style={langButton}><KlingIcon width='100' height='100' /></Button>
  //   if (goal === 'JavaScript') {
  //     languagesJsx.push(jsIconJsx)
  //   } else if (goal === 'Python') {
  //     languagesJsx.push(pyIconJsx)
  //   } else if (goal === 'CSS') {
  //     languagesJsx.push(cssIconJsx)
  //   } else if (goal === 'HTML') {
  //     languagesJsx.push(htmlIconJsx)
  //   } else if (goal === 'Klingon') {
  //     languagesJsx.push(klingIconJsx)
  //   }
  // }

  render () {
    const { goals, goalToUpdate } = this.state
    if (goals === null) {
      return (<p>Loading...</p>)
    }
    const languages = []
    const languagesJsx = []
    let goalsJsx
    let updateGoalJsx
    const goalsArray = []
    if (goals.length === 0) {
      this.props.history.push('/create-goal')
    } else {
      goals.forEach(goal => {
        goalsArray.push(goal)
        if (languages.indexOf(goal.language) === -1) {
          languages.push(goal.language)
          this.iconJsxSetter(goal.language, languagesJsx)
        }
        if (goalToUpdate !== null && goal.id === goalToUpdate.id) {
          goalsArray.pop(goal)
          const { name, characters, language, date, time, measurement, frequency } = this.state.goalToUpdate
          updateGoalJsx = (
            <Card style={ updateGoalCard }>
              <Form style={ goalForm }onSubmit={this.handleSubmit}>
                <h4> { <Form.Group controlId='name' style={nameGroup}>
                  <Form.Control
                    style={input}
                    required
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                  />
                </Form.Group> } </h4>
                <p style={goalPara}> I want to type
                  { <Form.Group controlId='characters' style={charGroup}>
                    <Form.Control
                      style={input}
                      type="number"
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
                    <Form.Control
                      as="select"
                      required
                      name='language'
                      onChange={this.handleChange}
                      style={input}>
                      <option>{language}</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="Python">Python</option>
                      <option value="HTML">HTML</option>
                      <option value="CSS">CSS</option>
                    </Form.Control>
                  </Form.Group> } by { <Form.Group controlId='date' style={ dateGroup }>
                    <Form.Control
                      style={input}
                      type="date"
                      name="date"
                      defaultValue={ date }
                      onChange={this.handleChange}
                    />
                  </Form.Group> } I will achieve this goal by practicing { <Form.Group controlId='time' style={ timeGroup }>
                    <Form.Control
                      style={input}
                      type="number"
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
                      style={input}
                      as='select'
                      required
                      name='measurement'
                      onChange={this.handleChange}>
                      <option>{measurement}</option>
                      <option value='minute(s)'>{ 'minute(s)' }</option>
                      <option value='hour(s)'>{ 'hours(s)' }</option>
                      <option value='day(s)'>{ 'days(s)' }</option>
                    </Form.Control>
                  </Form.Group> } every { <Form.Group
                    controlId='frequency' style={ freqGroup }>
                    <Form.Control
                      style={input}
                      as='select'
                      required
                      name='frequency'
                      onChange={this.handleChange}>
                      <option>{ frequency }</option>
                      <option value='day'>{ 'day' }</option>
                      <option value='week'>{ 'week' }</option>
                      <option value='month'>{ 'month' }</option>
                    </Form.Control>
                  </Form.Group> } </p>
                <div style={{ marginLeft: '12px' }}>
                  <Button
                    type='submit'
                    style={{ margin: '11px' }}>Submit
                  </Button>
                  <Button
                    onClick={() => this.delete(goal.id)}
                    style={{ margin: '11px' }}>Delete
                  </Button>
                </div>
              </Form>
            </Card>
          )
        }
      })
      goalsJsx = goalsArray.map((goal) => (
        <Card style={ goalStatCard } className={'goalStatCard'} key={goal.id} onClick={() => this.show(goal)}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>{goal.name}: {goal.language}</Card.Title>
              <Card.Title>Due {this.daysRemaining(goal)}.</Card.Title>
            </div>
          </Card.Body>
        </Card>
      ))
    }
    return (
      <>
        <Card style={languageCard}>
          {languagesJsx}
        </Card>
        <NavLink to='/create-goal' className='nav-link' style={ newGoalLink }>+New Goal</NavLink>
        <div style={container}>
          <div >{updateGoalJsx}</div>
          <div>{goalsJsx}</div>
        </div>
      </>
    )
  }
}

export default withRouter(Dashboard)

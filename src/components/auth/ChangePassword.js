import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

import { Button, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import { navCard, navCardButtons } from '../dashboard/dashboard_styles'
import { changePwCard, changePwForm, changePwFormGroup, changePwTitle } from './auth_styles'
class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onChangePassword = (event) => {
  event.preventDefault()

  const { msgAlert, history, user } = this.props

  changePassword(this.state, user)
    .then(() =>
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/'))
    .catch((error) => {
      this.setState({ oldPassword: '', newPassword: '' })
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { oldPassword, newPassword } = this.state

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>

        <Card style={ navCard }>
          <div>
            <Button style={navCardButtons} onClick={() => this.props.history.push('/dashboard')}>Dashboard</Button>
            <Button style={navCardButtons} onClick={() => this.props.history.push('/sign-out/')}>Sign Out</Button>
          </div>
        </Card>
        <Card style={changePwCard}>
          <h3 style={changePwTitle}>Change Password</h3>
          <Form style={changePwForm} onSubmit={this.onChangePassword}>
            <Form.Group controlId='oldPassword' style={changePwFormGroup}>
              <Form.Label>Old password</Form.Label>
              <Form.Control
                required
                name='oldPassword'
                value={oldPassword}
                type='password'

                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='newPassword' style={changePwFormGroup}>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                name='newPassword'
                value={newPassword}
                type='password'

                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
          </Form>
        </Card>
      </div>

    </div>
  )
}
}

export default withRouter(ChangePassword)

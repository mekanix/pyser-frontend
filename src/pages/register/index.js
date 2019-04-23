import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import EmptyTemplate from 'templates/empty'
import store from 'store'
import styles from './styles'


@observer
class Register extends React.Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const result = await store.auth.register(
      this.state.email,
      this.state.password,
    )
    if (result.status === 200) {
      store.error.message = (
        <div>
          You are now registered!
          Once admin approves your account you should be
          able to &nbsp;
          <Link to="/login">
            login
          </Link>
        </div>
      )
    } else {
      store.error.message = result.error
    }
    store.error.open = true
    this.setState({
      password: '',
      repeatPassword: '',
    })
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handleRepeatPassword = (event) => {
    this.setState({ repeatPassword: event.target.value })
  }

  render() {
    return (
      <EmptyTemplate>
        <div style={styles.root}>
          <Paper style={styles.paper}>
            <div>
              <h1>Register</h1>
              <form style={styles.form} onSubmit={this.handleSubmit}>
                <div>
                  <TextField
                    label="Email"
                    margin="normal"
                    onChange={this.handleEmail}
                    value={this.state.email}
                    type="email"
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <TextField
                    label="Password"
                    type="password"
                    margin="normal"
                    onChange={this.handlePassword}
                    value={this.state.password}
                    required
                  />
                </div>
                <div>
                  <TextField
                    label="Repeat Password"
                    type="password"
                    margin="normal"
                    onChange={this.handleRepeatPassword}
                    value={this.state.repeatPassword}
                    required
                  />
                </div>
                <div style={styles.button}>
                  <Button variant="contained" type="submit">
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </div>
      </EmptyTemplate>
    )
  }
}


Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}


export default withRouter(Register)

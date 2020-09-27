import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import Animate from 'rc-animate'

import './login.scss'

class Login extends Component {
  static propTypes = {
    userinfo: PropTypes.object.isRequired,
    saveUserInfo: PropTypes.func.isRequired
  }

  state = {

  }

  render () {
    return (
      <Animate transitionName='fade'>
        <h1>hello</h1>
      </Animate>
    )
  }
}
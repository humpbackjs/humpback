import React, { Component } from 'react'
import { connect } from 'nycticorax'
import { IGNORE_STATIC_METHODS } from './config'

export default function (name, storeActions, componentActions) {
  class R extends Component {
    state = {
      component: undefined
    }

    componentDidMount() {
      window.require([name], (C) => {
        const actions = {}

        Object
          .getOwnPropertyNames(C)
          .forEach((name) => {
            if (!IGNORE_STATIC_METHODS.includes(name)) {
              actions[name] = C[name]
            }
          })

        componentActions[name] = actions
        this.setState({ component: C })
      })
    }

    dispatch = (name, func, ...values) => {
      if (name === 'global' && storeActions[func]) {
        return this.props.dispatch(storeActions[func], ...values)
      }
      const actions = componentActions[name]
      if (actions) {
        return actions[func](...values)
      }
    }

    render() {
      const { component: C } = this.state
      const { store } = this.props

      if (!C) {
        return (
          <div>loading</div>
        )
      }

      return (
        <C store={store} dispatch={this.dispatch} />
      )
    }
  }

  return connect('store')(R)
}
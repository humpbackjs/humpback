/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import {
  Button, message, ConfigProvider, DatePicker, locales,
} from 'antd'
import Nycticorax from 'nycticorax'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax()

createStore({ a: '9' })

class X extends Component {
  static getValue = () => getStore().a

  static updateValue = async (value) => {
    await new Promise((r) => setTimeout(r, 1000))
    dispatch({ a: value }, true)
  }

  onGetB = () => {
    message.info(this.props.dispatch('b', 'getValue'))
  }

  onSetB = () => {
    this.props.dispatch('b', 'updateValue', Math.random().toFixed(2))
  }

  onSetG = async () => {
    await this.props.dispatch('global', 'updateUserName', Math.random())
    message.success('更新完成')
  }

  render() {
    const { user } = this.props.store
    const { a, mountedComponents, name } = this.props

    return (
      <div>
        <p style={{ fontSize: 100 }}>{name.toUpperCase()}</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>
            全局值：
            {user.name}
          </p>
          <p>
            组件值:
            {a}
          </p>
          <p>
            B 组件加载完成：
            {mountedComponents.includes('b') ? 'yes' : 'no'}
          </p>
          <Button onClick={this.onGetB}>获取 B 组件的值</Button>
          <Button onClick={this.onSetB}>更新 B 组件的值</Button>
          <Button onClick={this.onSetG}>更新全局值(异步)</Button>
          <ConfigProvider locale={locales.zh_CN}>
            <DatePicker />
          </ConfigProvider>
        </div>
      </div>
    )
  }
}

export default connect('a')(X)

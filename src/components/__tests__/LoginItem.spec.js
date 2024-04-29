import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginItem from '../LoginItem.vue'

describe('Login', () => {
  it('renders LoginItem', async () => {
    const wrapper = mount(LoginItem, {
      props: {
        userId: 'initialUserId', 'onUpdate:userId': (e) => wrapper.setProps({ userId: e }),
        password: 'initialPassword', 'onUpdate:password': (e) => wrapper.setProps({ password: e })
      }
    })
    const inputUserId = wrapper.find('input[type="text"]')
    await inputUserId.setValue('MyUserId')
    const inputPassword = wrapper.find('input[type="password"]')
    await inputPassword.setValue('MyPassword')
    expect(wrapper.props('userId')).toEqual('MyUserId')
    expect(wrapper.props('password')).toEqual('MyPassword')
  })
})

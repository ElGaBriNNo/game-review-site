import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TitleScreen from '../TitleScreen.vue'

describe('TitleScreen', () => {
  it('renders properly', () => {
    const wrapper = mount(TitleScreen, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

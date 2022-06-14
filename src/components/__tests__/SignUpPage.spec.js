
/// <reference types="@peeky/test"/>

import { mount } from "@vue/test-utils";
import SignUpPage from "../SignUpPage.vue";



describe('Example test suite', () => {
  test('Component must be defined', () => {
    expect(SignUpPage).toBeDefined()
  })
})



describe('Component testingt', () => {
  test('contain name variable', () => {
    expect(SignUpPage.name).toEqual("UserNames")
  })
  test('contain confirmation', () => {
    expect(SignUpPage).toContain("ConfirmDialog");
  })
  test('component data is truthy', () =>
  {
    expect(SignUpPage.toBeTruthy())
  })
  test('array to be empty', () =>
  {
    expect(SignUpPage).toContain([])
  })
})
test.skip('skip test', () => {
  expect(1).toBe(1)
})

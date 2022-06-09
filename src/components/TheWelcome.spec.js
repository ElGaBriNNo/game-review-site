
/// <reference types="@peeky/test"/>

import { mount } from "@vue/test-utils";
import TheWelcome from "./TheWelcome.vue";



describe('Example test suite', () => {
  test('Component must be defined', () => {
    expect(TheWelcome).toBeDefined()
  })
})



describe('Show items test', () => {
test('array name to be gamesF', () => {
  expect(TheWelcome.name).toEqual("gamesF")
})
  test('games to be an array', () => {
    expect(TheWelcome.data().games).toEqual([]);
  })
  test('component data is truthy', () =>
  {
    expect(TheWelcome.data()).toBeTruthy()
  })
  test('array to be empty', () =>
  {
    expect(TheWelcome.data().games.length).toBe(0)
  })
})
test.skip('skip test', () => {
  expect(1).toBe(1)
})

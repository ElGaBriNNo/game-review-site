
/// <reference types="@peeky/test"/>

import { mount } from "@vue/test-utils";
import CarouselComponent from "../CarouselComponent.vue";



describe('Example test suite', () => {
  test('Component must be defined', () => {
    expect(CarouselComponent).toBeDefined()
  })
})



describe('Show items test', () => {
test('array name to be gamesF', () => {
  expect(CarouselComponent.name).toEqual("gamesF")
})
  test('games to be an array', () => {
    expect(CarouselComponent.data().games).toEqual([]);
  })
  test('component data is truthy', () =>
  {
    expect(CarouselComponent.data()).toBeTruthy()
  })
  test('array to be empty', () =>
  {
    expect(CarouselComponent.data().games.length).toBe(0)
  })
})
test.skip('skip test', () => {
  expect(1).toBe(1)
})

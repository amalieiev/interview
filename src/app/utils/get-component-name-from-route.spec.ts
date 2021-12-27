import { getComponentNameFromRoute } from "./get-component-name-from-route"

it('should get component name from route', () => {
  expect(getComponentNameFromRoute('event-loop')).toBe('EventLoopComponent');
  expect(getComponentNameFromRoute('closure')).toBe('ClosureComponent');
})

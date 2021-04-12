### Pure Component

Problem: React Components render method re-renders component event if we pass same props and the state. So App's performance  will slightly decrease.

Solution: React.PureComponent is same subclass like React.Component but it only renders component when there is a difference between current and previous state or props.

Note: Remember that React.PureComponent only shallowly compares the object. If your state or props contains the complex data structure, it may produce false-negative for deeper difference.

Shallow compare:
* It performs shallow equality (===) check on the current props and next props objects as well as current state and next state object.
* It does this by iterating on the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal.
* shallow compare works by checking if two values are equal in case of primitive types like string, number and in case of object it just checks the reference. So if you shallow compare a deep nested object it will just check the reference not the values inside that object.

// Part-01

React JS: 
Raect JS is a library of JS for creating/ rendering(حوالہ کرنا ) UI.

JSX(JavaScript Extension Syntax):
JSX lets us to write HTML directly inside JS.

Why use JSX instead of js?
jsx as a file extension is that a tool doesn't have to go through all your files: it can just look for those with the . jsx extension and rewrite them to be plain . js , that's all. Makes things easier for the computer

Setup the Local Environment: 
Two ways to write/create React project
1) Create-React-App 
npm Create-React-App
2) vite
npm run dev

Components in React:
Components are re-usable & independent piece of code.

Why use components React?
Every React. js component acts separately, so you can change one section of the app without needing to update everything. 

The Rules of JSX:
1. Return a single root element.
To return multiple elements from a component, wrap them with a single parent tag.
For example, you can use a <div>.

2. Close all the tags.
JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

3. camelCase all most of the things! 
JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

React fragment:
 Fragments(ٹکڑا) let you group a list of children without adding extra nodes to the DOM.
 Like:  <> </>


// Part-02..

 Props are the information that you pass to a JSX tag. 
 For example: className, src, alt, width, and height are some of the props you can pass to an <img>.

React components use props to communicate with each other.

React map() Methods:
The .map() method allows you to run a function on each item in the array, returning a new array as the result. 
In React, map() can be used to generate lists.( نقشہ() طریقہ آپ کو صف میں موجود ہر آئٹم پر ایک فنکشن چلانے کی اجازت دیتا ہے، جس کے نتیجے میں ایک نئی صف واپس آتی ہے۔ React میں، map() کو فہرستیں بنانے کے لیے استعمال کیا جا سکتا ہے۔)

Conditionals in React:
Adding elements on the basis of some  condition.. (کسی شرط کی بنیاد پر عناصر کو شامل کرنا)
Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
 then (?) render name + ' ✔', otherwise (:);

States in React JS:
 The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

What is props and state in React?
What is the difference between props and state in React?
Props: The primary use of props is to pass data and callback functions to child components. It allows for a unidirectional data flow, where the parent dictates the values and behavior of the child component. 
State: State is used to store local and temporary data that might change over time.

What is a Hook(کانٹا) in React JS?
(Def #1): Hooks allow us to "hook" into React features such as state and lifecycle methods.

(Def #2): Hooks are functons they let you use state and other React features without writing a class.
(Def #3): (Hooks are functions or methods that allow more functionality and more work permission within our components.)
There are 15 Hooks in new version of React JS. 
Although Hooks generally replace class components, there are no plans to remove classes from React.
Hooks are a new addition in React 16.8(2019).

Rules for Hooks:
🔴 Do not call Hooks inside conditions or loops.
🔴 Do not call Hooks after a conditional return statement.
🔴 Do not call Hooks in event handlers.
🔴 Do not call Hooks in class components.
🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
🔴 Do not call Hooks inside try/catch/finally blocks.

(1) State Management Hooks: To work with React State.
(i) useState(): useState() is a React Hooks that lets you add a state variable to your component.
const [state, setState] = useState(initialState)

useState returns an array with exactly two values:
(1) The current state. During the first render, it will match the initialState you have passed.
(2) The set function that lets you update the state to a different value and trigger a re-render.

(ii) useReducer(): It is used to store and update states, just like the useState Hook.
const [state, dispatch] = useReducer(reducer, initialArg, init?)

(iii) useSyncExternalStore(): useSyncExternalStore is a React Hook that lets you subscribe to an external store.
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)

(2) Context Hooks: To read from React Context.
(iv) useContext(): useContext is a React hook that provides a way to share data (context) across multiple components without explicitly passing it through props.
const value = useContext(SomeContext)

(3)Transition Hooks: To use transition for better user experiences.
(v) useTransition(): useTransition. useTransition is a React Hook that lets you update the state without blocking the UI.
const [isPending, startTransition] = useTransition()

(vi) useDeferredValue(): useDeferredValue is a React Hook that lets you defer updating a part of the UI.
const deferredValue = useDeferredValue(value)

(4) Random Hooks: 
(vii) useDebugValue(): useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.
useDebugValue(value, format?)

(viii) useId(): useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
const id = useId()

(5) Ref Hooks: To reference JavaScript values or DOM elements.
(ix) useRef(): useRef is a React Hook that lets you reference a value that’s not needed for rendering.
const ref = useRef(initialValue) 

(x)  useImperativeHandle: useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.
useImperativeHandle(ref, createHandle, dependencies?)

(6) Performance Hooks: To improve App performance with Memoization.
(xi) usememo(): useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
const cachedValue = useMemo(calculateValue, dependencies)

(xii) useCallback(): useCallback is a React Hook that lets you cache a function definition between re-renders.
const cachedFn = useCallback(fn, dependencies)

(7) Effect Hooks: To Perform Side effects.
(xiii) useEffect(): useEffect is a React Hook that lets you synchronize a component with an external system.
useEffect(setup, dependencies?)

(xiv) useLayoutEffect(): useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
useLayoutEffect can hurt performance. Prefer useEffect when possible.
useLayoutEffect(setup, dependencies?)

(xv) useInsertionEffect(): useInsertionEffect allows inserting elements into the DOM before any layout Effects fire.
useInsertionEffect is for CSS-in-JS library authors. Unless you are working on a CSS-in-JS library and need a place to inject the styles, you probably want useEffect or useLayoutEffect instead.
useInsertionEffect(setup, dependencies?)

React 19 Hooks:
↪ useFormSatatus(): useFormStatus is a Hook that gives you status information of the last form submission.
const { pending, data, method, action } = useFormStatus();

↪ useActionState(): To make the common cases easier for Actions, we’ve added a new hook called useActionState.

↪ useOptimistic(): useOptimistic is a React Hook that lets you optimistically update the UI.
  const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);

↪ use(): 




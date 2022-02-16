import './App.css';

function App() {
  return (
    <div className="App">
      <pre>{`
      React JS
      library developed by Facebook
      SPA one way binding
      component structure
      Virtual DOM
      Good community support
      Build User Interface
      Client side rendering
      JSX .

      SPA- Any web application in which when you are clicking on any button or selecting option from navigation bar then if your page or browser page reloads then that application is a
      multipage application. So, if it does not reload the browser page and just updates the page without reloading then that application is SPA.
      Creating React app using CRA (c.r.a boiler plate) will always create applications that will be SPA.

      Component struture: When creating React component applications the complete screen will be broken down into smaller components. This is done so that these components can be reused at any time 
      when required.
      React has two ways of creating components. Class and Functional
      We create smart and dumb components. Smart Components have states and allow data manipulations. Dumb components are only used for an uI, they recieve data from parent comp. as props

      Virtual Dom
      DOM is document Object model, created by converting HTML, CSS and JS.
      Real Dom, which is an object which gets created whenever any react application gets loaded on the screen for the 
      first time, whenever React components get mounted on the screen for the first time. Any changes
       on the screen which changes state will not be directly reflected on the real Dom.
      So, we have two virtual doms, one virtual dom gets created at the time of mounting of react componet so it is a copy of your real dom. The other virtual dom is the dom which contains
       the new changes, updates state variables values.
      The two virtual doms will be compared with each other and will check for the new changes. This complete procedure is known as diffing algorithm.
      Now, the new changes will be updates in your Real dom, this procedure is known as Reconciliation.

      JSX:- writing HTML inside JS, because in Read we write HTML,CSS and Js in the same file, unlike Angular.

      Easy learing curve:- It requires only the knowledge of Javascript. But in case of Angular it requires typescript.

      React Native:- using React we can create mobile-application as well which supports with Android and iOS.`}
      </pre>
    </div>
  );
}

export default App;

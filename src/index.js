import React from "react";
import { render } from "react-dom";
import { compose, withState, withHandlers, withProps } from "recompose";

export default compose(
  withState('isVisible', 'toggleVis', false),
  withHandlers({
    toggleVisibility: ({ toggleVis, isVisible}) => {
      return(e) => {
        return toggleVis(!isVisible);
      };
    },
  }),
  withProps(({ isVisible }) => {
    return {
      title: isVisible ? 'This is visible title' : 'This is default title',
      message: isVisible ? 'Hello I am visible' : 'I am not visible yet. Click the button!'
    };
  })
)(Presentation);

const App = () => (
  <div>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));

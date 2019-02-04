import * as React from "react";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div id="header" className="jumbotron">
      <h1 id="titleText">Bag Tracker</h1>
      <h4 id="subtitleText">Keep track of packed bags</h4>
    </div>
  );
};

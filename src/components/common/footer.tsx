
import * as React from 'react';

export const FooterText: React.StatelessComponent<{}> = () => {
  return (
    <div>
    <footer id="footer" className="footer">
      <div className="content has-text-centered">
        <p>
          Bag Tracker by Leslie Alldridge - 2018. Created with{" "}
          <a target="_blank" href="https://reactjs.org/">React</a>,{" "}
          <a target="_blank" href="https://redux.js.org/">Redux</a>,{" "}
          <a target="_blank" href="https://getbootstrap.com/">Bootstrap</a>, Node JS and CSS3.
        </p>
      </div>
    </footer>
  </div>
  );
}
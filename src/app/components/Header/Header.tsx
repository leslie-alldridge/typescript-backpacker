import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import * as style from '../../containers/App/style.css';

const divStyle = {
  color: 'blue',
  height: '10vh',
  position: 'relative',
  width: '100vw',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
} as React.CSSProperties;

const heroText = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  background: 'none'
} as React.CSSProperties;

export class Header extends React.Component {
  render() {
    return (
      <div className={style.subHead} style={divStyle}>
        <Jumbotron style={heroText}>
          <h3>Backpack Tracker</h3>
          <h4>Keep track of your packed bags</h4>
        </Jumbotron>
      </div>
    );
  }
}

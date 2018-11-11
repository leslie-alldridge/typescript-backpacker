import * as React from 'react';
import * as style from './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ContactContent, ContactHeader } from 'app/components';

library.add(fab, fas);

export class App extends React.Component {
  render() {
    return (
      <div className={style.new}>
        <ContactHeader />
        <ContactContent />
      </div>
    );
  }
}

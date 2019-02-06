import * as React from 'react';
import { MainPageContainer } from './components/maincontainer';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      <MainPageContainer/>
    </div>

  );
}

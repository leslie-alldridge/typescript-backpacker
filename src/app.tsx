import * as React from 'react';
import Main from './components/main'
import { saveBagToDB } from './components/members/actions/fetchMembers';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      <Main auth={{"user":{username: 'leslie'}}} bags={[]} saveBagToDB={saveBagToDB}/>
    </div>

  );
}

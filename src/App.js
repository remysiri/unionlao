import React from 'react';

/*
Libraries
*/

/*
Layouts
*/
import Main from './app/layouts/main';

/*
Components
*/

/*
Styling
*/
import './app/_sass/App.scss';

function App({ match, location }) {
  return (
    <div className="container">
      <Main match={match} location={location}/>
    </div>
  );
}

export default App;

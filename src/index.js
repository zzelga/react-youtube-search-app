import React from 'react';
import ReactDOM from 'react-dom';
import { YOUTUBE_DATA_API_KEY } from '../secrets';
import SearchBar from './components/search_bar';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#target'));

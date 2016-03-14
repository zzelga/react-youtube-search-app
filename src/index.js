import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// import our React components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// import the API key for hooking into Youtube's Search API
import { YOUTUBE_DATA_API_KEY } from '../secrets';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(searchTerm) {
    YTSearch({key: YOUTUBE_DATA_API_KEY, term: searchTerm}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // debounced version of video search
    const videoSearch = _.debounce((searchTerm) => { this.videoSearch(searchTerm) }, 300);

    return (
      <div className="row">
        <div className="col-md-12">
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#target'));

import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './searchBar';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

const API_KEY = 'AIzaSyDOaa46OLM-8NrVsZtvJjf7FTtl6PMSClY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  };

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log(videos[0]);
    });
  };

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  };
};

export default App;

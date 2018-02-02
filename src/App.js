import React, { Component } from 'react';
// import the react component
import TagsInput from 'react-tags-input';
import './App.css';
// optionally, impor the default styles.
import 'react-tags-input/build/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
    this.handleTagInput = this.handleTagInput.bind(this);
  }
  handleTagInput(tag) {
    this.setState({ tags: [...this.state.tags, tag]});
  }
  render() {
    return (
      <div className="App">
        <TagsInput onTagInput={this.handleTagInput}/>
      </div>
    );
  }
}

export default App;

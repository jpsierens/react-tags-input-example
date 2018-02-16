import React, { Component } from 'react';
// import the react component
import TagsInput from 'react-tags-input';
import './App.css';
// optionally, import the default styles.
import 'react-tags-input/build/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
    this.handleTagInput = this.handleTagInput.bind(this);
    this.handleTagRemove = this.handleTagRemove.bind(this);
    this.handleTagsClear = this.handleTagsClear.bind(this);
  }
  handleTagInput(tag) {
    this.setState({ tags: [...this.state.tags, tag]});
  }
  handleTagRemove(tag) {
    this.setState({ tags: [...this.state.tags.filter(t => t !== tag)]});
  }
  handleTagsClear() {
    this.setState({ tags: []});
  }
  render() {
    return (
      <div className="App">
        <h1>react-tags-input Example</h1>
        <p>
          Type in a tag, press enter to input the tag.
          When the tag is created, you can click on the X to remove it.
        </p>

        <TagsInput
          onClear={this.handleTagsClear}
          onTagRemove={this.handleTagRemove}
          onTagInput={this.handleTagInput} />

        <div className="github">
          share some love!
          <div>
            <a
              className="github-button"
              href="https://github.com/jpsierens/react-tags-input"
              data-size="large"
              data-show-count="true"
              aria-label="Star jpsierens/react-tags-input on GitHub">Star</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

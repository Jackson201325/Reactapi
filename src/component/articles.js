import React, { Component } from 'react';
import axios from 'axios';

import Article from './article';

// const URL = 'http://localhost:3000/api/v1';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/articles').then(r => {
      //   console.log(r.data.data);
      this.setState({ articles: r.data.data });
    });
  }

  render() {
    return (
      <div>
        <Article articles={this.state.articles} />
      </div>
    );
  }
}

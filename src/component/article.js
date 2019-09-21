import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Article extends Component {
  renderArticles = articles => {
    console.log('this is render articles from renderArticles: ', articles);
    return articles.map(article => {
      return (
        <Card key={article.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.body}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    const { articles } = this.props;
    console.log('This is render articles', articles);
    return <div className="hello">{this.renderArticles(articles)}</div>;
  }
}

export default Article;

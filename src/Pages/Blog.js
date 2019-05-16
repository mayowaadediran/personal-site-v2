import React, { Component } from 'react';
import * as contentful from 'contentful';


const client = contentful.createClient({
   space: 'ud774g68kyvz',
   accessToken: '_tsXvRZKyOlOJeqKQN3goNyBMMlvno98yJf5v4hQfPw'
 })


class Blog extends Component {

  state = {
    posts: []
  }

componentDidMount() {
  client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if (entry.fields) {
        console.log(entry.fields)
      }
    })
  })
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Blog

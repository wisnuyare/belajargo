import React, { Component } from 'react'
import axios from 'axios'

class NewsEvent extends Component {
  state = {
    check: null
  }
  componentDidMount(){
    let id = this.props.match.params.check_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          check: res.data
        });
      });
  }
  render() {

    const check = this.state.check ? (
      <div className="check">
        <h4 className="center">{this.state.check.title}</h4>
        <p>{this.state.check.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return (
      <div className="container">
        {check}
      </div>
    )
  }
}

export default NewsEvent
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Apicheck extends Component{
    state = {
        checks: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
          .then(res => {
            this.setState({
              checks: res.data.slice(0, 5)
            });
          })
    }
    render(){
        const { checks } = this.state
        const checksList = checks.map(check => {
            return (
            <div className="newsevent" key={check.id}>
                <div className="news-content">
                    <Link to={'/' + check.id}>
                        <span className="newsandevent">{check.title}</span>
                    </Link>
                    <p>{check.body}</p>
                </div>
            </div>
            )
        })
        return (
            <div>
              <div className="container">
                <h4 className="center">News And Event</h4>
                {checksList}
              </div>
            </div>
        )    
    }
}

export default Apicheck
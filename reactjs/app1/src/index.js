import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
class APIDemo1 extends React.Component {
  constructor(props) {
    super(props);
    //create state object
    this.state = {
      posts: []
    }
  }

  //we should call api to fetch data in componentDidMount method
  componentDidMount() {
    //api calling 
    let apiAddress = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiAddress).then((response) => response.json()).then((data) => {
      console.log(data);
      this.setState({
        posts: data
      });

    }).catch((error) => {
      alert('data could not fetch');
    });
  }
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header text-bg-info">
              <h3>post</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th width="10%">ID</th>
                    <th width="10%">userID</th>
                    <th width="30%">title </th>
                    <th>body</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.posts.map((item) => {
                    return (<tr>
                      <td>{item.id}</td>
                      <td>{item.userId}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>)
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APIDemo1 />);
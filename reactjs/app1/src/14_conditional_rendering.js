import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './instagram.css';
class InstaGramPost extends Component {
  constructor(props) {
    super(props);
    //create state variable
    this.state = {
      comment: '',
      finalComment: '',
      isLike: false,
    };
  }
  //arrow function
  updateComment = (value) => {
    this.setState({
      comment: value
    });

  }
  showComment = (e) => {
    e.preventDefault();
    this.setState({
      finalComment: this.state.comment
    });
  }
  updateLike = () =>
  {
      // alert('update like');
      this.setState({
          isLike: !this.state.isLike
      });
  }  
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-12">
          <form onSubmit={this.showComment} >
            <div className="post-container">
              {/* Post Image (Star) */}
              <div className="post-image">
                <img src="https://picsum.photos/600/300" alt="Star Image" />
              </div>
              {/* Interaction Section (Like Button) */}
              <div className="interaction-section">
                <button type='button' className="like-button" aria-label="Like" 
                onClick={this.updateLike}>
                  <i className={(this.state.isLike==true) ? "bi bi-heart-fill text-danger" : "bi bi-heart"} />

                </button>
              </div>
              {/* Comment Section */}
              <div className="comment-section">
                {this.state.finalComment}
                <textarea className="comment-input" placeholder="type your comment" rows={2} 
                value={this.state.comment} onChange={(e) => this.updateComment(e.target.value)} required />
                <button type='submit' className="btn btn-primary submit-button">submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InstaGramPost />);
import React from 'react';

class CommentBox extends React.Component {
  state = { comment: '' };

  handleChange = (e) => {
    this.setState({comment: e.target.value});
    console.log(this.state.comment)
  }

  handleSumbmit = e => {
    e.preventDefault();
  
    this.setState({comment: ''})
  }

  renderFormComponent() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button type="submit">Submit a comment</button>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return this.renderFormComponent();
  }
}

export default CommentBox;

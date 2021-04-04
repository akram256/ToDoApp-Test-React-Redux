import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes  from 'prop-types'
import { getposts } from '../actions/postActions'


class Posts extends Component {
  componentWillMount() {
    this.props.getposts();
  }
  render() {
    const postItems = this.props.posts.map(post =>(
      <div key = {post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )) ;
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  } 
}
Posts.propTypes = {
  getposts: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  posts : state.posts.items
});
export default connect(mapStateToProps,{getposts})(Posts);

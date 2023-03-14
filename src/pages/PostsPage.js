import React , { useEffect }  from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsAction'
import {Post} from "../components/Post"

// Redux state is now in the props of the component
const PostsPage = ({ dispatch,loading, posts, hasErrors }) => {
 
  useEffect(()=>{
    dispatch(fetchPosts())

  },[dispatch])


  // Show loading, error, or success state
  const renderPosts = () => {
   if(loading) 
   return <p>loading ...</p> 
   if (hasErrors)
   return <p>unable to displaypost </p>
   return posts.map((post)=> <Post key={post.is}  post={post}/>)
  }


  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
  })
  // Connect Redux to React
  export default connect(mapStateToProps)(PostsPage)
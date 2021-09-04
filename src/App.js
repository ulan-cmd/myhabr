import React from 'react';
import Post from "./pages/post/Post";
import PostList from "./pages/postList/PostList";

class App extends React.Component {

  render(){
    return (
        <>
          {/*<Post />*/}
          <PostList />
        </>
    )
  }

}

export default App;
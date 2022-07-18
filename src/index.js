import ReactDOM  from "react-dom";
import Topbar from "./Components/Topbar";
import Post from "./Components/Post"
import {ImagesTopbar, ImagesPosts, ImagesProfPics, ImagesStories} from "./Assets/img"; 

function App(){
  const posts = [{
    name: "teste",
    profilePic: ImagesPosts.Dog,
    content: <img src={ImagesPosts.Dog}/>,
    likedBy: {name: "respondeai", profilePic:ImagesPosts.Dog},
    likes: "105.503"

  },{
    name: "teste2",
    profilePic: ImagesPosts.Dog,
    content: <img src={ImagesPosts.Dog}/>,
    likedBy: {name: "asdasdasd", profilePic:ImagesPosts.Dog},
    likes: "107.503"

  }];
    return(
      <div>
        <Topbar></Topbar>
        {posts.map(post => <Post
          name = {post.name}
        profilePic = {post.profilePic}
        content = {post.content}
        likedBy = {post.likedBy}
        likes = {post.likes}
        />)}
        
      </div>
    )
}

ReactDOM.render(App(), document.querySelector('.root'));
import "./posts.css"
import { Link } from "react-router-dom"
import Post from "../post/Post"
import data from "../../data"

export default function Posts() {
  function handle(id) {
    // console.log(id.target.alt);
    
  }
  return (
    <div className='posts'> 
      {
        data.map((data) => (
          <Post
            key={data.id}
            postId={data.id}
            postImg={data.postImg}
            postCat1={data.postCat1}
            postCat2={data.postCat2}
            postTitle={data.postTitle}
            postDate={data.postDate}
            postCaption={data.postCaption}
            onClickHandler={(id) => handle(id)}
          />
        ))
      }


    </div>
  )
}

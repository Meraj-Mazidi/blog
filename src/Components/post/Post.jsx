import "./post.css"
import { Link } from "react-router-dom"

export default function Post(props) {

  return (
    <Link to={`/post/${props.postId}`} className="link">
      <div className="post" onClick={(id) => props.onClickHandler(id)} >
        <img src={`/assests/${props.postImg}`} alt={props.postId} className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">{props.postCat1}</span>
            <span className="postCat">{props.postCat2}</span>
          </div>
          <span className="postTitle">{props.postTitle}</span>
          <hr />
          <span className="postDate">{props.postDate}</span>
        </div>
        <p className="postDesc">{props.postCaption}</p>
      </div>
    </Link>
  )
}

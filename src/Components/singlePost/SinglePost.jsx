import "./singlePost.css"
import data from "../../data"

export default function SinglePost() {
    const currentUrl = window.location.href
    const postId = currentUrl.charAt(currentUrl.length - 1);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={`/assests/${data[postId].postImg}`} alt="Post Img" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    {data[postId].postTitle}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa fa-edit" />
                        <i className="singlePostIcon material-icons">delete</i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Meraj</b> </span>
                    <span className="singlePostDate">{data[postId].postDate}</span>
                </div>
                <div className="descContainer">
                    <p className="singlePostDesc">{data[postId].postCaption}</p></div>
            </div>
        </div>
    )
}

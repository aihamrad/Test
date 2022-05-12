import { Link } from "react-router-dom"

const PostCard = ({ post, index, onMouseOver, userDetails }) => {
  return (
    <div
      onMouseEnter={() => onMouseOver(index)}
      onMouseLeave={() => onMouseOver(index)}
      className="card radius-8 flex flex-column justify-content-between flex-basis flex-basis-30 m-m relative pointer"
    >
      {post.showLayer && (
        <div className="p-l over-layer">
          <Link to={post.link} className="btn btn-primary pv-m ph-s centered">
            {userDetails.userType === "admin"
              ? "Edit the post"
              : "View more details"}
          </Link>
        </div>
      )}
      <div className="p-m">
        <div className="text-semibold text-black mb-m">{post.title}</div>
        <div className="p-m bg-grey text-m-grey border radius-8">
          {post.body.slice(0, 100)}...
        </div>
      </div>
    </div>
  )
}

export default PostCard

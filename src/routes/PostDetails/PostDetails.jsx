import { useCallback, useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { endPoint } from "../../api/api"

const PostDetails = ({ user }) => {
  const [postDetails, setPostDetails] = useState({})
  const [postComments, setPostComments] = useState([])
  const postId = useParams().id
  const navigate = useNavigate()

  const getPostDetails = useCallback(() => {
    endPoint
      .getPostDetails(postId)
      .then((res) => setPostDetails({ ...res.data, edit: false }))
  }, [postId])

  const getPostComments = useCallback(() => {
    endPoint.getPostcomments(postId).then((res) => {
      setPostComments(
        res.data.map((item) => {
          return { ...item, edit: false }
        })
      )
    })
  }, [postId])

  useEffect(() => {
    getPostDetails()
    getPostComments()
  }, [getPostDetails, getPostComments])

  const handleValueChanges = (e) => {
    const newPostDetails = { ...postDetails }
    newPostDetails[e.target.name] = e.target.value
    setPostDetails(newPostDetails)
  }

  const handleEditPostDetails = () => {
    const newPostDetails = { ...postDetails }
    newPostDetails.edit = !newPostDetails.edit
    setPostDetails(newPostDetails)
  }

  const handleEditSaveComment = (index) => {
    const newPostComments = [...postComments]
    newPostComments[index].edit = !newPostComments[index].edit
    setPostComments(newPostComments)
  }

  const handleRemoveBtn = (id) => {
    const filteredComments = postComments
      .filter((item) => item.id !== id)
      .map((item) => item)
    setPostComments(filteredComments)
  }

  const handleCommentValue = (e, index ) => {
    const newCommentArray = [ ...postComments ]
    newCommentArray[index][e.target.id] = e.target.value
    setPostComments(newCommentArray)
  }

  const isAdmin = user.userDetails.userType === "admin"

  return (
    <div className="p-m flex justify-content-center editable-input">
      <div className="flex-basis flex-basis-40">
        <div className="card  bg-white radius-8 shadow relative">
          <div className="back-btn" onClick={() => navigate(-1)}>
            {"< Back"}
          </div>
          <div className="b-b p-m text-center">Post Details</div>
          <div className="p-m">
            <label>Title:</label>
            <input
              type="text"
              className="mb-m"
              onChange={handleValueChanges}
              name="title"
              value={postDetails.title || ""}
              disabled={!postDetails.edit}
            />
            <label>Description:</label>
            <textarea
              value={postDetails.body || ""}
              rows="5"
              onChange={handleValueChanges}
              name="body"
              disabled={!postDetails.edit}
            />
            <div className="flex justify-content-end">
              {isAdmin && (
                <button
                  onClick={handleEditPostDetails}
                  className="btn btn-primary pv-m ph-l"
                >
                  {postDetails.edit ? "Save" : "Edit"}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mv-m">Comments</div>
        <div className="card p-m shadow radius-8 mb-m">
          <div className="scroll-box">
            {postComments.length > 0 ? (
              <div>
                {postComments.map((comment, index) => (
                  <div
                    className="border bg-white radius-8 relative mb-m"
                    key={index}
                  >
                    <div className="text-semibold p-m b-b">
                      <input
                        type="text"
                        value={comment.name || ""}
                        onChange={(e) => handleCommentValue(e, index)}
                        id='name'
                        disabled={!comment.edit}
                      />
                      <div>
                        <input
                          type="text"
                          className="text-12 text-m-grey"
                          value={comment.email || ""}
                          onChange={(e) => handleCommentValue(e, index)}
                          id='email'
                          disabled={!comment.edit}
                        />
                      </div>
                    </div>
                    <div className="p-m">
                      <label>Comment:</label>
                      <textarea
                        value={comment.body || ""}
                        rows="5"
                        onChange={(e) => handleCommentValue(e, index)}
                        id='body'
                        disabled={!comment.edit}
                      />
                      {isAdmin && (
                        <div className="flex justify-content-end">
                          <button
                            className="btn btn-primary pv-m ph-l"
                            onClick={() => handleEditSaveComment(index)}
                          >
                            {comment.edit ? "Save" : "Edit"}
                          </button>
                          <button
                            onClick={() => handleRemoveBtn(comment.id)}
                            className="btn text-red p-m"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">No comments</div>
            )}
          </div>
        </div>
        {isAdmin && (
          <div className="flex justify-content-end">
            <Link to={"/"} className="btn text-red p-m">
              Remove the post
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostDetails

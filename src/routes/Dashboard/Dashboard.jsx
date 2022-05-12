import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { endPoint } from "../../api/api"
import PostCard from "./Components/PostCard"

const Dashboard = ({ user }) => {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) {
      navigate("/")
    } else {
      getPostsList()
    }
  }, [navigate])

  const getPostsList = () => {
    endPoint.getPostsList().then((res) => {
      setPosts(
        res.data.map((element) => {
          return {
            ...element,
            showLayer: false,
            link: `/dashboard/post/${element.id}`,
          }
        })
      )
      setIsFetching(false)
    })
  }

  const onMouseOver = (index) => {
    const newPosts = [...posts]
    newPosts[index].showLayer = !newPosts[index].showLayer
    setPosts(newPosts)
  }

  return (
    <div className="p-m">
      {isFetching ? (
        <div>loading ...</div>
      ) : (
        <div className="flex justify-content-between flex-wrap-wrap">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              index={index}
              onMouseOver={onMouseOver}
              userDetails={user.userDetails.userType}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard

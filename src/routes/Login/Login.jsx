import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({ user, login }) => {
  const [userDetails, setUserDetails] = useState({
    userType: 'user',
    name: '',
    password: '',
  })

  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
      if(user) {
        navigate('/dashboard')
      }
  } ,[navigate])


  const onSubmit = (e) => {
    e.preventDefault()
    login(userDetails)
    navigate('/dashboard')
  }

  const handleChangesValue = (e) => {
    const newUserDetails = { ...userDetails }
    newUserDetails[e.target.name] = e.target.value
    setUserDetails(newUserDetails)
  }

  return (
    <div className="centered">
      <div className="card login-box bg-white radius-8 shadow p-m text-center relative">
        <div className="text-center mb-m b-b text-20 pb-m">Login</div>
        <form className="ph-l" onSubmit={onSubmit}>
          <div className="mb-m">
            <input
              type="text"
              name="name"
              autoComplete="username"
              placeholder="name..."
              value={userDetails.name || ""}
              onChange={handleChangesValue}
            />
          </div>
          <div className="mb-m">
            <input
              type="password"
              autoComplete="new-password"
              className="input-text"
              value={userDetails.password || ""}
              onChange={handleChangesValue}
              name="password"
              placeholder="Enter your passowrd"
              required
            />
          </div>
          <div>
            <div className='flex justify-content-center pv-m'>
              <div className="mr-m flex align-items-center">
                <input type="radio" id="user" name="userType" value="user" onChange={handleChangesValue} checked={userDetails.userType === 'user'}/>
                <label htmlFor="user">User</label>
              </div>
              <div className="flex align-items-center">
                <input type="radio" id="admin" name="userType" value="admin" onChange={handleChangesValue} checked={userDetails.userType === 'admin'}/>
                <label htmlFor="admin">Admin</label>
              </div>
            </div>
          </div>
          <button className="btn btn-primary pv-m width-100" id='sign-in' >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

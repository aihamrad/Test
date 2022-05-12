import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = ({ user, logout }) => {
  const [dropdownShow, setDropdownShow] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    setDropdownShow(false)
    navigate("/")
  }

  return (
    <div className="navbar flex align-items-center justify-content-between">
      <div>Value labs</div>
      {user?.isAuthenticated && (
        <div className="flex align-items-center">
          <div
            onMouseLeave={() => setDropdownShow(false)}
            className="navbar-btn relative mr-m"
          >
            <div onClick={() => setDropdownShow(true)}>
              {user.userDetails.name.slice(0, 5)}
            </div>
            {dropdownShow && (
              <div className="dropdown-list bg-white shadow p-m">
                <button onClick={handleLogout} className="btn">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {!user?.isAuthenticated && (
        <div className="btn btn-primary p-m">Log in</div>
      )}
    </div>
  )
}

export default Navbar

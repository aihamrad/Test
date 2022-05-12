import { connect } from 'react-redux'
import { logout } from '../../store/user'

import Navbar from './Navbar'

const mapDispatchToProps = {
  logout: logout
}

const mapStateToProps = (store) => ({
  user: store.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


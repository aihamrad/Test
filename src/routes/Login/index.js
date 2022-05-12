import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../store/user'


const mapDispatchToProps = {
  login: login

}
const mapStateToProps = (store) => ({
  user: store.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)


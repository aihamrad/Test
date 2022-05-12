import { connect } from 'react-redux'
import Dashboard from './Dashboard'

const mapDispatchToProps = {}

const mapStateToProps = (store) => ({
  user: store.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
  };
}

export default connect(mapStateToProps)(LoginPage)

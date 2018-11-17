import { connect } from 'react-redux'
import Homepage from 'components/Homepage'
import { simpleAction } from 'redux/actions/simpleAction'

const mapStateToProps = state => ({
  ...state,
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

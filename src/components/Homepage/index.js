import React from 'react'
import PropTypes from 'prop-types'

class Homepage extends React.PureComponent {
  simpleAction = () => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div>

        Hello world!
        <br />
        {JSON.stringify(this.props)}
        <button type="button" onClick={this.simpleAction}>Test redux action</button>
      </div>
    )
  }
}

Homepage.propTypes = {
  simpleAction: PropTypes.func.isRequired,
}

export default Homepage

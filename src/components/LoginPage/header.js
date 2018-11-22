import React from 'react'
import styled from 'styled-components'
import { AUTH_TYPE } from '../../constants/user'

const LinkItem = styled.a.attrs({
  className: 'nav-link',
})`
  cursor: pointer;
  color: #333;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`


class AuthHeader extends React.PureComponent {
  render() {
    const { authType, changeAuthType } = this.props
    return (
      <ul className="nav justify-content-end py-2">
        <li className="nav-item">
          <LinkItem
            active={authType === AUTH_TYPE.REGISTER}
            onClick={() => changeAuthType(AUTH_TYPE.REGISTER)}
          >
            Homepage
          </LinkItem>
        </li>
        <li className="nav-item">
          <LinkItem
            active={authType === AUTH_TYPE.LOGIN}
            onClick={() => changeAuthType(AUTH_TYPE.LOGIN)}
          >
            Login
          </LinkItem>
        </li>
      </ul>
    )
  }
}

export default AuthHeader

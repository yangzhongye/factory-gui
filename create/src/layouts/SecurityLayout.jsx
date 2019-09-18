import React from 'react';
import { Redirect } from 'umi';
import { getUserInfo } from '@/utils/userInfo';

class SecurityLayout extends React.Component {

  render() {
    const { children } = this.props;
    const currentUser = getUserInfo();
  
    if (!currentUser.token) {
      return <Redirect to="/user/login"></Redirect>;
    }

    return children;
  }
}

export default SecurityLayout;

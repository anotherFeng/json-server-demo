import React, { Component } from 'react';
import { List } from 'antd';

class Users extends Component {

  renderUser(){
    console.log(this.props.users)
    const { users } = this.props;
    return users.map((user) => (
      <List.Item>
        <List.Item.Meta
          title={user.firstName}
        />
        <List.Item.Meta
          title={(user.cohortId === '1' ? 'HRR32' : 'HRR31')}
        />
        <List.Item.Meta
          title={user.id}
        />
      </List.Item>
    ))    
  }

  render(){
    return !this.props.users ? <div/> :
    <List 
      size="small"
      header={<div>Students</div>}
      bordered
    >
      <List.Item>
        <List.Item.Meta
          title='Name'
        />
        <List.Item.Meta
          title='Cohort'
        />
        <List.Item.Meta
          title='User ID'
        />
      </List.Item>
      {this.renderUser()}
    </List>
  }
}

export default Users;
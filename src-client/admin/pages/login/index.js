import './index.less'

import React, {Component} from 'react';
import {connect} from 'react-redux'

import $ from 'jquery';
import _ from 'lodash';

import {Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;

import {loadLogin} from '../../actions/login'

class PageLogin extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // let promise = new Promise(function(resolve, reject) {
    //   console.log('Promise');
    //   setTimeout(()=>{
    //     resolve();
    //   },3000)
    //
    // });
    //
    // promise.then(function() {
    //   console.log('Resolved.');
    // });
    //
    // console.log('Hi!', _.now());
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.loadLogin(values.userName, values.password);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <div className="page-login-content">
        <h2>欢迎使用 XMAN-ADMIN 系统！</h2>

        <Form onSubmit={this.handleSubmit} className="login-form">

          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{required: true, message: '请输入用户名!'}],
            })(
              <Input addonBefore={<Icon type="user"/>} placeholder="用户名"/>
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码!'}],
            })(
              <Input addonBefore={<Icon type="lock"/>} type="password" placeholder="密码"/>
            )}
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </FormItem>

        </Form>

      </div>
    );
  }
}

PageLogin = Form.create({})(PageLogin);

const mapStateToProps = (state) => ({
  user: state.login.user
});

const mapDispatchToProps = {loadLogin};

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);


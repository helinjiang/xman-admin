import './index.less'

import React, {PropTypes, Component} from 'react';

import {Link} from 'react-router'

import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class PageCustomerCreate extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };

    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );

    return (
      <div className="page-customer-content">
        <Button type="primary"><Link to="/customer/list">返回到列表</Link></Button>

        <Form onSubmit={this.handleSubmit}>

          <FormItem
            {...formItemLayout}
            label={(
              <span>
              姓名&nbsp;
                <Tooltip title="真实的姓名是什么?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '请输入姓名!'
              }],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="E-mail"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="电话号码"
          >
            {getFieldDecorator('phone', {
              rules: [{required: true, message: 'Please input your phone number!'}],
            })(
              <Input addonBefore={prefixSelector}/>
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">提交</Button>
          </FormItem>

        </Form>
      </div>
    );
  }
}

PageCustomerCreate = Form.create({})(PageCustomerCreate);

// export default PageCustomerCreate;

module.exports = PageCustomerCreate;
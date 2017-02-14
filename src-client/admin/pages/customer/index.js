import './index.less'

import React, {PropTypes, Component} from 'react';

import {Table, Icon} from 'antd';

class PageCustomer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];

    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }

    /**
     * 分页参数，详见 https://ant.design/components/pagination-cn/#API
     */
    const pagination = {
      total: data.length,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
      showTotal: total => `共计 ${total} 项记录`,
      onShowSizeChange: (current, pageSize) => {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange: (current) => {
        console.log('Current: ', current);
      },
    };

    return (
      <div className="page-customer-content">
        <h2>HELLO, customer</h2>
        <Table columns={columns} dataSource={data} pagination={pagination}/>
      </div>
    );
  }
}

export default PageCustomer;
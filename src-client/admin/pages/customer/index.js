import './index.less'

import React, {PropTypes, Component} from 'react';
import reqwest from 'reqwest';

import {Table} from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `我叫${name}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    {text: 'Male', value: 'male'},
    {text: 'Female', value: 'female'},
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

/**
 * 分页参数，详见 https://ant.design/components/pagination-cn/#API
 */
// const pagination = {
//   total: data.length,
//   showSizeChanger: true,
//   pageSizeOptions: ['10', '20', '50', '100'],
//   showTotal: total => `共计 ${total} 项记录`,
//   onShowSizeChange: (current, pageSize) => {
//     console.log('Current: ', current, '; PageSize: ', pageSize);
//   },
//   onChange: (current) => {
//     console.log('Current: ', current);
//   },
// };

class PageCustomer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      pagination: {},
      loading: false
    }
  }

  componentDidMount() {
    this.fetch();
  }

  handleTableChange(pagination, filters, sorter) {
    const pager = this.state.pagination;
    pager.current = pagination.current;

    this.setState({
      pagination: pager,
    });

    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch(params = {}) {
    console.log('params:', params);

    this.setState({loading: true});

    reqwest({
      url: '/admin/api/customer',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = this.state.pagination;
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;

      this.setState({
        loading: false,
        data: data.data,
        pagination,
      });
    });
  }

  render() {

    return (
      <div className="page-customer-content">
        <h2>HELLO, customer</h2>
        <Table columns={columns}
               rowKey={record => record.email}
               dataSource={this.state.data}
               pagination={this.state.pagination}
               loading={this.state.loading}
               onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default PageCustomer;
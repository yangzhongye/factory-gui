import { Table } from 'antd';
import React, { Component, Fragment } from 'react';
import styles from './index.less';

class StandardTable extends Component {

  constructor(props) {
    super(props);
    const { columns } = props;
  }

  render() {
    const { data, rowKey, ...rest } = this.props;
    const { list = [], pagination = false } = data || {};
    const paginationProps = pagination
      ? {
          showSizeChanger: true,
          showQuickJumper: true,
          ...pagination,
        }
      : false;
    return (
      <div className={styles.standardTable}>
        <Table
          rowKey={rowKey || 'key'}
          dataSource={list}
          pagination={paginationProps}
          {...rest}
        />
      </div>
    );
  }
}

export default StandardTable;

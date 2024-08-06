import React, { useState } from 'react';
import Pagination from './Pagination';
import type { ITableProps, ISort } from './interface';

function Table(props: ITableProps<any>) {
  const { columns, dataSource, pagination } = props;
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<ISort>();
  const sortKey = sort && columns[sort.index].dataIndex;

  console.info(sortKey)
  const list = (sort
      ? dataSource.sort((a, b) => {
        return sort.direction === 'u'
          ? a[sortKey as any]?.localeCompare(b[sortKey as any])
          : b[sortKey as any]?.localeCompare(a[sortKey as any]);
      })
      : dataSource
    ).slice(pagination.pageSize * (page - 1), pagination.pageSize * page)

  return (
    <div>
      <table border={1}>
        <thead>
          {
            columns.map((column, index) => {
              return (
                <th key={index}>
                  { column.title }
                  <button onClick={() => {
                    setSort({ index, direction: 'u' })
                  }}>⬆️</button>
                  <button onClick={() => {
                    setSort({ index, direction: 'd' })
                  }}>⬇️</button>
                </th>
              )
            })
          }
        </thead>
        <tbody>
          {
            list.map((data, index) => {
              return (
                <tr>
                  {
                    columns.map((column, index) => {
                      return (<th key={index}>{ data[columns[index]?.dataIndex] || '-' }</th>)
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <Pagination
        total={dataSource.length}
        pageSize={pagination.pageSize}
        onChange={(page, pageSize) => {
          setPage(page);
        }}
      />
    </div>
  );
}

export default Table;

import React, { useEffect, useState } from 'react';
import type { IPaginationProps } from './interface';

function Pagination(props: IPaginationProps) {
  const [page, setPage] = useState(1);
  const { pageSize, total, onChange } = props;
  const totalpage = Math.floor(total / pageSize);

  useEffect(() => {
    props.onChange?.(page, pageSize);
  }, [page, pageSize]);

  return (
    <div>
        { page > 1 && <button onClick={() => setPage(p => p - 1)}>{'<'}</button> }
        <span> { page } </span>
        { page < totalpage && <button onClick={() => setPage(p => p + 1)}>{'>'}</button> }
    </div>
  );
}

export default Pagination;

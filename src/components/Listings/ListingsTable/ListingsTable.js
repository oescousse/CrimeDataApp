import React from 'react';
import { useTable, usePagination } from 'react-table'

function Table({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  // Render Data Table UI
  return (
    <>
       <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>  

     Pagination
     <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 25].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>

  )
}

export function ListingsTable() {
  const data = [
    {
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      age: 28,
      status: 'Active'
    },
    {
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      age: 35,
      status: 'Active'
    },
    {
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      age: 33,
      status: 'Inactive'
    },
    {
      name: 'Patricia Lebsack',
      email: 'Julianne@kory.org',
      age: 25,
      status: 'Active'
    },
    {
      name: 'Kamren',
      email: 'Hettinger@annie.ca',
      age: 42,
      status: 'Active'
    },
    {
      name: 'Dennis Schulist',
      email: 'Dach@jasper.info',
      age: 34,
      status: 'Inactive'
    },
    {
      name: 'Kurtis Weissnat',
      email: 'Hoeger@billy.biz',
      age: 44,
      status: 'Active'
    },
    {
      name: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      age: 26,
      status: 'Active'
    },
    {
      name: 'Glenna Reichert',
      email: 'McDermott@dana.io',
      age: 30,
      status: 'Inactive'
    },                                
  ]

  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Age',
      accessor: 'age'
    }, {
      Header: 'Status',
      accessor: 'status'
    }
  ]

  return (
    // <Styles>
      <Table data={data} columns={columns}/>
    // </Styles>
  )

}

export default ListingsTable;
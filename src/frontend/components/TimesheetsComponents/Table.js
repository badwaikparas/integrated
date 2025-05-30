// import React from "react";
// import { useTable, useGlobalFilter, useAsyncDebounce, useFilters, useSortBy, usePagination } from 'react-table'  // new

// // Define a default UI for filtering
// function GlobalFilter({
//     preGlobalFilteredRows,
//     globalFilter,
//     setGlobalFilter,
// }) {
//     const count = preGlobalFilteredRows.length
//     const [value, setValue] = React.useState(globalFilter)
//     const onChange = useAsyncDebounce(value => {
//         setGlobalFilter(value || undefined)
//     }, 200)

//     return (
//         <span>
//             Search:{' '}
//             <input
//                 value={value || ""}
//                 onChange={e => {
//                     setValue(e.target.value);
//                     onChange(e.target.value);
//                 }}
//                 placeholder={`${count} records...`}
//             />
//         </span>
//     )
// }

// function Table({ columns, data }) {
//     // Use the state and functions returned from useTable to build your UI
//     const { getTableProps, getTableBodyProps, headerGroups, page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, prepareRow, state, preGlobalFilteredRows, setGlobalFilter } =
//         useTable({
//             columns,
//             data,
//         }, useFilters, useGlobalFilter, useSortBy, usePagination);

//     // Render the UI for your table
//     return (
//         <>
//             <GlobalFilter
//                 preGlobalFilteredRows={preGlobalFilteredRows}
//                 globalFilter={state.globalFilter}
//                 setGlobalFilter={setGlobalFilter}
//             />
//             {headerGroups.map((headerGroup) =>
//                 headerGroup.headers.map((column) =>
//                     column.Filter ? (
//                         <div key={column.id}>
//                             <label htmlFor={column.id}>{column.render("Header")}: </label>
//                             {column.render("Filter")}
//                         </div>
//                     ) : null
//                 )
//             )}
//             <table {...getTableProps()} border="1" style={{ width: "100%" }}>
//                 <thead>
//                     {headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map(column => (
//                                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                                     {column.render('Header')}
//                                     <span>
//                                         {column.isSorted
//                                             ? column.isSortedDesc
//                                                 ? ' ▼'
//                                                 : ' ▲'
//                                             : ''}
//                                     </span>
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {page.map((row, i) => {
//                         prepareRow(row);
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map((cell) => {
//                                     return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//                                 })}
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//             <div className="pagination">
//                 <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//                     {'<<'}
//                 </button>{' '}
//                 <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//                     {'<'}
//                 </button>{' '}
//                 <button onClick={() => nextPage()} disabled={!canNextPage}>
//                     {'>'}
//                 </button>{' '}
//                 <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//                     {'>>'}
//                 </button>{' '}
//                 <span>
//                     Page{' '}
//                     <strong>
//                         {state.pageIndex + 1} of {pageOptions.length}
//                     </strong>{' '}
//                 </span>
//                 <select
//                     value={state.pageSize}
//                     onChange={e => {
//                         setPageSize(Number(e.target.value))
//                     }}
//                 >
//                     {[5, 10, 20].map(pageSize => (
//                         <option key={pageSize} value={pageSize}>
//                             Show {pageSize}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             {/* <div>
//                 <pre>
//                     <code>{JSON.stringify(state, null, 2)}</code>
//                 </pre>
//             </div> */}
//         </>
//     );
// }

// export function SelectColumnFilter({
//     column: { filterValue, setFilter, preFilteredRows, id },
// }) {
//     // Calculate the options for filtering
//     // using the preFilteredRows
//     const options = React.useMemo(() => {
//         const options = new Set();
//         preFilteredRows.forEach((row) => {
//             options.add(row.values[id]);
//         });
//         return [...options.values()];
//     }, [id, preFilteredRows]);

//     // Render a multi-select box
//     return (
//         <select
//             name={id}
//             id={id}
//             value={filterValue}
//             onChange={(e) => {
//                 setFilter(e.target.value || undefined);
//             }}
//         >
//             <option value="">All</option>
//             {options.map((option, i) => (
//                 <option key={i} value={option}>
//                     {option}
//                 </option>
//             ))}
//         </select>
//     );
// }

// export default Table;

import React from "react";
import { useTable, useGlobalFilter, useAsyncDebounce, useFilters, useSortBy, usePagination } from 'react-table';

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <span>
            Search: {' '}
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </span>
    );
}

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    return (
        <>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            {headerGroups.map(headerGroup =>
                headerGroup.headers.map(column =>
                    column.Filter ? (
                        <div key={column.id}>
                            <label htmlFor={column.id}>{column.render("Header")}: </label>
                            {column.render("Filter")}
                        </div>
                    ) : null
                )
            )}
            <table {...getTableProps()} border="1" style={{ width: "100%" }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' ▼'
                                                : ' ▲'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
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
                        {state.pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <select
                    value={state.pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[5, 10, 20].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach(row => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    return (
        <select
            name={id}
            id={id}
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Table;

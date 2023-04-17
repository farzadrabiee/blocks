import React from 'react';
import {IRowCol} from "./IRowCol";
import TableCols from "./TableCols";

const TableRows = ({rowCol}: { rowCol: IRowCol }) => {
    const rows: Array<number> = [];
    for (let i = 0; i < rowCol.row; i++)
        rows.push(i);

    return (
        <>
            {
                rows.map(r =>
                    <tr key={r}>
                        <TableCols rowCol={rowCol}/>
                    </tr>
                )
            }
        </>
    )
}

export default TableRows;
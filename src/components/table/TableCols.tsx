import React from 'react';
import {IRowCol} from "./IRowCol";

const TableCols = ({rowCol}: { rowCol: IRowCol }) => {
    const cols: Array<number> = [];
    for (let i = 0; i < rowCol.col; i++)
        cols.push(i);

    return (
        <>
            {
                cols.map(c =>
                    <td key={c} className="text-l p-4 border-2 border-amber-600">{c}</td>
                )
            }
        </>
    )
}

export default TableCols;
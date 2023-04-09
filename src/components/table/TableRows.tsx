import React from 'react';
import {Col, Row} from "./CellTypes";
import TableCols from "./TableCols";

const TableRows = ({row}: { row: Array<Row> }, {col}: { col: Array<Col> }) => {
    return (
        <>
            {
                row.map(r => {
                        <tr key={r.row} className="text-xl p-1.5 border-4 border-amber-600">
                            <TableCols col={col}></TableCols>
                        </tr>
                    }
                )
            }
        </>
    )
}

export default TableRows;
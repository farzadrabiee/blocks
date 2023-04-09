import React from 'react';
import {Col, Row} from "./CellTypes";
const TableRows = ({col}: { col: Array<Col> }) => {
    return (
        <>
            {
                col.map(c => {
                        <td key={c.col} className="text-xl p-1.5 border-4 border-amber-600">{c.col}</td>
                    }
                )
            }
        </>
    )
}

export default TableRows;
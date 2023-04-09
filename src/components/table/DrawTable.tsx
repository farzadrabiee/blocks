import React from 'react';
import TableRows from "./TableRows";
import {Col, Row} from "./CellTypes";

const DrawTable = ({row}: { row: Array<Row> }, {col}: { col: Array<Col> }) => {
    return (
        <>
            <table className={"table-fixed shadow-lg bg-white"}>
                <tbody>
                <TableRows row={row} col={col}></TableRows>
                </tbody>
            </table>
        </>
    );
}

export default DrawTable;
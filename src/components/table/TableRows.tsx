import React from "react";
import { IRowCol } from "./IRowCol";
import TableCols from "./TableCols";

const TableRows = ({ rowCol }: { rowCol: IRowCol }) => {
    return (
        <>
            {Array.from({ length: rowCol.row }).map((_, r) => (
                <tr key={r}>
                    <TableCols rowCol={rowCol} />
                </tr>
            ))}
        </>
    );
}

export default TableRows;
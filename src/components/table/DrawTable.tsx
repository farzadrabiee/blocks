import React from 'react';
import TableRows from "./TableRows";
import {IRowCol} from "./IRowCol";

const DrawTable = ({rowCol}: { rowCol: IRowCol }) => {
    return (
        <>
            <table className={"table-fixed shadow-lg bg-white"}>
                <tbody>
                <TableRows rowCol={rowCol} />
                </tbody>
            </table>
        </>
    );
}

export default DrawTable;
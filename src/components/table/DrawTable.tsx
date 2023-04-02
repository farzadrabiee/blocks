import React from 'react';
import {Row} from "./Row";

const DrawTable = ({rows}: { rows: Array<Row> }) => {
    return (
        <>
            <table className={"table-fixed shadow-lg bg-white"}>
                <thead>
                <tr>
                    <th className={"border p-2"}>ID</th>
                    <th className={"border p-2"}>Value</th>
                </tr>
                </thead>
                <tbody>
                    {rows.map(r => <tr key={r.id}><td className={"border p-2"}>{r.id}</td><td className={"border p-2"}>{r.value}</td></tr>)}
                </tbody>
            </table>
        </>
    );
}

export default DrawTable;
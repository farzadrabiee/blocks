import React from 'react';

const TableBody = (row: any) => {
    return (
        <td className="text-xl p-1.5 border-4 border-amber-600">[${row}]</td>
    )
}

export default TableBody;
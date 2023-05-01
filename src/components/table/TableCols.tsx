import React from 'react';
import {IRowCol} from "./IRowCol";
import {v4 as uuidv4} from 'uuid';

const TableCols = ({rowCol}: { rowCol: IRowCol }) => {
    const cols: Array<number> = [];
    for (let i = 0; i < rowCol.col; i++)
        cols.push(i);

    const mouseHover = (uuid: string) => {
        console.info(uuid);
    }

    return (
        <>
            {
                cols.map(c =>
                    <td key={uuidv4()}
                        className="select-none text-l p-4 border-2 border-amber-600 hover:backdrop-blur-xl hover:border-amber-500"
                        onMouseOver={() => mouseHover(uuidv4())}>{c}</td>
                )
            }
        </>
    )
}

export default TableCols;
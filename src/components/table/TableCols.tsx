import React, {useState} from 'react';
import {IRowCol} from "./IRowCol";
import {v4 as uuidv4} from 'uuid';
import _ from 'lodash';

interface colUuid {
    col: number;
    uuid: string;
}

const TableCols = ({rowCol}: { rowCol: IRowCol }) => {
    const [selectedCells, setSelectedCells] = useState<Array<string>>([]);

    const cols: Array<colUuid> = [];
    for (let i = 0; i < rowCol.col; i++) {
        const uuid = uuidv4();
        cols.push({col: i, uuid: uuid});
    }

    const mouseHover = () => {
        console.info('Hover!');
    }

    const mouseClick = (uuid: string) => {
        console.log(_.includes(selectedCells, uuid))
        if (!_.includes(selectedCells, uuid)) {
            setSelectedCells([...selectedCells, uuid]);
        }

        console.info({selectedCells});
    }

    return (
        <>
            {
                cols.map(c =>
                    <td key={c.uuid}
                        className="select-none text-l p-4 border-2 border-amber-600 hover:backdrop-blur-xl hover:border-amber-500"
                        onMouseOver={() => mouseHover} onClick={() => mouseClick(c.uuid)}>{c.uuid}</td>
                )
            }
        </>
    )
}

export default TableCols;
import React from 'react';
import { IRowCol } from "./IRowCol";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

interface IColUuid {
    col: number;
    uuid: string;
}

const TableCols = ({ rowCol }: { rowCol: IRowCol }) => {
    // const [selectedCells, setSelectedCells] = useState<Array<string>>([]);

    const cols: IColUuid[] = Array.from({ length: rowCol.col }, (_, i) => ({
        col: i,
        uuid: uuidv4(),
    }));

    const mouseHover = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
        console.log(`Hover on ${e.currentTarget.dataset.key}`);
    };

    const mouseClick = () => {
        console.log('Click!')
        // const selected = [...selectedCells, uuid];
        // // selected = _.uniq(selected);
        // setSelectedCells(selected);

        // console.info({selectedCells});
    }

    return (
        <>
            {cols.map((c) => (
                <td
                    key={c.uuid}
                    className="select-none text-l p-4 border-2 border-amber-600 hover:backdrop-blur-xl hover:border-amber-500"
                    data-key={c.uuid}
                    onMouseOver={mouseHover}
                    onClick={mouseClick}
                >
                    {c.uuid}
                </td>
            ))}
        </>
    )
}

export default TableCols;
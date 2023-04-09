import React, {useState} from 'react';
import Validator from 'validator';
import DrawTable from "./table/DrawTable";
import {Col, Row} from "./table/CellTypes";

const InputDimension = () => {
    const [rowValue, setRowValue] = useState(-1);
    const [colValue, setColValue] = useState(-1);
    const [error, setError] = useState(false);
    const tempRow: Array<Row> = [
        {row: 0},
        {row: 1}
    ]

    const tempCol: Array<Col> = [
        {col: 0},
        {col: 1}
    ]

    const handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();

        if (error)
            return;
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!Validator.isNumeric(e.target.value))
            setError(true);
        else {
            setError(false)

            if (e.target.id === 'row')
                setRowValue(Number(e.target.value))

            if (e.target.id === 'col')
                setColValue(Number(e.target.value))
        }
    }

    return (
        <div className={"ml-2"}>
            <form onSubmit={handleSubmit}>
                <fieldset className={"m-2 flex flex-col items-center"}>
                    <label htmlFor={"row"}>Row:</label>
                    <input type={"number"} id={"row"} name={"row"} onChange={handleChange}
                           className={"w-16 p-1 border border-sky-500"} minLength={1} maxLength={1} required/>
                </fieldset>
                <fieldset className={"m-2 flex flex-col items-center"}>
                    <label htmlFor={"col"}>Column:</label>
                    <input type={"number"} id={"col"} name={"col"} onChange={handleChange}
                           className={"w-16 p-1 border border-sky-500"} minLength={1} maxLength={1} required/>
                </fieldset>
                <button type={"submit"}
                        className={"m-2 p-2 font-bold border border-sky-500 rounded-none hover:rounded-lg"}>Submit
                </button>
            </form>
            { !error && rowValue && colValue && <DrawTable row={tempRow} col={tempCol}/>}
        </div>
    );
}

export default InputDimension;
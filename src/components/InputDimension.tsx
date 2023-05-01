import React, {useState} from 'react';
import DrawTable from "./table/DrawTable";
import {IRowCol} from "./table/IRowCol";

const InputDimension = () => {
    const [rowValue, setRowValue] = useState(0);
    const [colValue, setColValue] = useState(0);
    const [rowCol, setRowCol] = useState({row: 0, col: 0});
    const handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();

        setRowCol({row: rowValue, col: colValue});
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'row') {
            setRowValue(Number(e.target.value))
        } else if (e.target.id === 'col') {
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
            {rowValue && colValue && <DrawTable rowCol={rowCol}/>}
        </div>
    );
}

export default InputDimension;
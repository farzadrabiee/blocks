import React, {FormEvent, useState} from 'react';
import Validator from 'validator';

const InputDimension = () => {
    const [rowValue, setRowValue] = useState(0);
    const [colValue, setColValue] = useState(0);
    const [error, setError] = useState(false);

    const handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();

        console.info({error})
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id)
        if (!Validator.isNumeric(e.target.value))
            setError(true);
        else
            setError(false)
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
        </div>
    );
}

export default InputDimension;
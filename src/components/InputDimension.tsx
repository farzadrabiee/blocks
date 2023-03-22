import React from 'react';

const InputDimension = () => {
    return (
        <div className={"w-32"}>
            <fieldset className={"flex flex-col items-center"}>
                <label htmlFor={"row"}>Row:</label>
                <input type={"number"} id={"row"} name={"row"} className={"w-16 p-1 border border-sky-500"} required/>
            </fieldset>
            <fieldset className={"flex flex-col items-center"}>
                <label htmlFor={"col"}>Column:</label>
                <input type={"number"} id={"col"} name={"col"} className={"w-16 p-1 border border-sky-500"} required/>
            </fieldset>
        </div>
    );
}

export default InputDimension;
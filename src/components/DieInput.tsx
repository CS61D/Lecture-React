import { useState } from "react";
import { useDice } from "../hooks/useDice";

export const DieInput = () => {
    const [nameInput, setNameInput] = useState<string>("Die 1");
    const [sidesInput, setSidesInput] = useState<number>(6);
    const { handleAdd, dice } = useDice();

    return (
        <div>
            <label htmlFor="nameInput">Name</label>
            <input
                id="nameInput"
                type="text"
                placeholder="D20"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
            />

            <label htmlFor="nameInput">Sides</label>
            <input
                id="nameInput"
                type="number"
                placeholder={"20"}
                min={2}
                value={sidesInput}
                onChange={(e) => setSidesInput(Number(e.target.value))}
            />

            <button
                onClick={() => {
                    console.log("hello?");
                    if (
                        nameInput &&
                        sidesInput > 2 &&
                        !dice.some((die) => die.name === nameInput) // Ensures unique names for key rendering
                    ) {
                        handleAdd({
                            sides: sidesInput,
                            name: nameInput,
                        });

                        setSidesInput(6);
                        setNameInput("");
                    }
                }}
                type="button"
            >
                Add Die
            </button>
        </div>
    );
};

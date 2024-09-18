import { useState } from "react";
import { useDice } from "../hooks/useDice";

export const DieInput = () => {
    const [nameInput, setNameInput] = useState<string>("Die 1");
    const [numberInput, setNumberInput] = useState<number>(6);
    const { handleAdd } = useDice();

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
                value={numberInput}
                onChange={(e) => setNumberInput(Number(e.target.value))}
            />

            <button
                onClick={() => {
                    handleAdd({
                        sides: numberInput,
                        name: nameInput,
                    });

                    setNumberInput(6);
                    setNameInput("");
                }}
                type="button"
            >
                Add Die
            </button>
        </div>
    );
};

import { useDice } from "../hooks/useDice";

export const DieDisplay = () => {
    const { handleDelete, dice } = useDice();

    return dice.map((die, index) => (
        //! Note using the name as a key only works if dice are required to have unique names
        <div key={`${die.name}`}>
            <span>
                Name: {die.name} Sides: {die.sides}
            </span>
            <button type="button" onClick={() => handleDelete(index)}>
                X
            </button>
        </div>
    ));
};

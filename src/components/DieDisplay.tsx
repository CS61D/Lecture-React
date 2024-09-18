import { useDice } from "../hooks/useDice";

export const DieDisplay = () => {
    const { handleDelete, dice } = useDice();

    return dice.map((die, index) => (
        <div key={die.name}>
            <span>
                Name: {die.name} Sides: {die.sides}
            </span>
            <button type="button" onClick={() => handleDelete(index)}>
                X
            </button>
        </div>
    ));
};

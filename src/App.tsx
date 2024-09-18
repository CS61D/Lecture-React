import "./App.css";
import { DieDisplay } from "./components/DieDisplay";
import { DieInput } from "./components/DieInput";
import { RollResult } from "./components/RollResult";
import { useDice } from "./hooks/useDice";

function App() {
    const { results, handleClear, handleRoll, dice } = useDice();

    const RollCTA = () => {
        if (results.length === 0) {
            return <p>Roll some dice to see the results</p>;
            // biome-ignore lint/style/noUselessElse: <explanation>
        } else if (results.length < 5) {
            return <p>There are {results.length} results</p>;
        }
        return (
            <>
                <p>There are {results.length} results</p>
                <button type="button" onClick={() => handleClear()}>
                    Clear
                </button>
            </>
        );
    };

    return (
        <div>
            <h1>Dice Roller</h1>
            <DieInput />
            {/* Role Button */}
            <button type="button" onClick={() => handleRoll()}>
                Roll
            </button>

            {/* DieDisplay */}
            <DieDisplay />

            <h2>Roll Results</h2>

            {RollCTA()}

            {/* Roles Result */}
            {results.map((round, index) => (
                <RollResult
                    rollResults={round}
                    roundNumber={results.length - index}
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={index}
                />
            ))}
        </div>
    );
}

export default App;

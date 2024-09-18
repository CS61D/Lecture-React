import type { Die, DieResult } from "../types/diceTypes";
import { createContext, useContext, useState, useEffect } from "react";

type DieContext = {
    dice: Die[];
    results: DieResult[][];
    handleDelete: (index: number) => void;
    handleRoll: () => void;
    handleClear: () => void;
    handleAdd: (die: Die) => void;
};

const DiceContext = createContext<DieContext | undefined>(undefined);

export const useDice = (): DieContext => {
    const context = useContext(DiceContext);
    if (context === undefined) {
        throw new Error("Must use useDice within a DiceProvider");
    }
    return context;
};

export const DiceProvider = ({ children }: { children: React.ReactNode }) => {
    const [dice, setDice] = useState<Die[]>(
        JSON.parse(localStorage.getItem("dice") ?? "[]"),
    );
    const [results, setResults] = useState<DieResult[][]>(
        JSON.parse(localStorage.getItem("results") ?? "[]"),
    );

    // dice
    useEffect(() => {
        localStorage.setItem("dice", JSON.stringify(dice));
    }, [dice]);

    // results
    useEffect(() => {
        localStorage.setItem("results", JSON.stringify(results));
    }, [results]);

    const handleDelete = (index: number) => {
        setDice((prevDice) =>
            prevDice.filter((_val, dieIndex) => index !== dieIndex),
        );
    };

    const handleRoll = () => {
        const roundResults: DieResult[] = [];

        for (const die of dice) {
            const result = Math.ceil(Math.random() * die.sides);
            roundResults.push({
                ...die,
                result,
            });
        }
        setResults((prev) => [roundResults, ...prev]);
    };

    const handleClear = () => {
        setResults([]);
    };

    const handleAdd = (die: Die) => {
        setDice((prevDice) => [...prevDice, die]);
    };

    return (
        <DiceContext.Provider
            value={{
                dice,
                results,
                handleAdd,
                handleClear,
                handleDelete,
                handleRoll,
            }}
        >
            {children}
        </DiceContext.Provider>
    );
};

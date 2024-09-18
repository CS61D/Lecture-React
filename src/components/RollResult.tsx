import type { DieResult } from "../types/diceTypes";

type RollResultProps = {
    rollResults: DieResult[];
    roundNumber: number;
};

export const RollResult = ({ rollResults, roundNumber }: RollResultProps) => {
    const totalResult = rollResults.reduce(
        (prev, curr) => prev + curr.result,
        0,
    );
    const totalSides = rollResults.reduce((prev, curr) => prev + curr.sides, 0);

    return (
        <div>
            <p>
                Round {roundNumber} : Total {totalResult} / {totalSides}
            </p>
            {rollResults.map((result) => (
                <p key={result.name}>
                    {result.name} {result.result} / {result.sides}
                </p>
            ))}
        </div>
    );
};

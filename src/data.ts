// Used for first part of assignment before

import type { Die, DieResult } from "./types/diceTypes";

export const sampleDice: Die[] = [
    {
        name: "D6",
        sides: 6,
    },
    {
        name: "D20",
        sides: 20,
    },
];

export const sampleRoles: DieResult[][] = [
    [
        {
            name: "D6",
            sides: 6,
            result: 4,
        },
        {
            name: "D20",
            sides: 20,
            result: 13,
        },
    ],
    [
        {
            name: "D6",
            sides: 6,
            result: 2,
        },
        {
            name: "D20",
            sides: 20,
            result: 19,
        },
    ],
];

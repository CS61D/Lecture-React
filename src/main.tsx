import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DiceProvider } from "./hooks/useDice.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DiceProvider>
            <App />
        </DiceProvider>
    </StrictMode>,
);

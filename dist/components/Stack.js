import { jsx } from "react/jsx-runtime";
export function Stack({ space = 1, children, }) {
    return (jsx("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: `${space}rem`,
        } }, children));
}

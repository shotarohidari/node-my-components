import { jsx } from "react/jsx-runtime";
export function Container({ children }) {
    return (
    // TODO: 幅固定の仕方が分からん
    jsx("div", { style: { display: "grid", placeContent: "center", padding: "2rem" } }, children));
}

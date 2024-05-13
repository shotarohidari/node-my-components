"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Container({ children }) {
    return (
    // TODO: 幅固定の仕方が分からん
    (0, jsx_runtime_1.jsx)("div", { style: { display: "grid", placeContent: "center", padding: "2rem" } }, children));
}
exports.Container = Container;

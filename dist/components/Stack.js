"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Stack({ space = 1, children, }) {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: `${space}rem`,
        } }, children));
}
exports.Stack = Stack;

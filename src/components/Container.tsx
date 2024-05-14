import React from "react";
import { jsx } from "react/jsx-runtime";
export function Container({ children }: { children: React.ReactNode }) {
    return (
      // TODO: 幅固定の仕方が分からん
      <div style={{ display: "grid", placeContent: "center", padding: "2rem" }}>
        {children}
      </div>
    )
  }
  
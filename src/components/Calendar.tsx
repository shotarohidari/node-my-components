import { dayAndDayOfWeekList } from "@hidari/calendar-logic"
import React, { useState } from "react"
import { jsx } from "react/jsx-runtime"

// もっと良いやり方を後で考える
function assertIsMonth(
  value: unknown
): asserts value is 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 {
  if (
    typeof value !== "number" ||
    ![1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12].includes(value)
  ) {
    throw Error(`不正な月: ${value}`)
  }
}

export function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth() + 1)

  assertIsMonth(month)
  const dayAndWeeks = dayAndDayOfWeekList({ year, month })
  // 土曜日がカレンダーの位置的に一番右に来るように調整
  const pad = 6 - dayAndWeeks.findIndex(({ dayOfWeek }) => dayOfWeek === "Sat")
  return (
    <>
      <h2 style={{ fontSize: "1.2rem", paddingLeft: "2rem" }}>
        <input
          value={year}
          min={1900}
          max={2100}
          type="number"
          onChange={(e) => setYear(Number(e.target.value))}
        />
        　/　
        <input
          value={month}
          min={1}
          max={12}
          type="number"
          onChange={(e) => {
            const month = Number(e.target.value)
            assertIsMonth(month)
            setMonth(month)
          }}
        />
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
        {new Array(pad).fill(0).map(() => (
          <div></div>
        ))}
        {dayAndDayOfWeekList({ year, month }).map(({ day, dayOfWeek }) => {
          const isSat = dayOfWeek === "Sat"
          const isSun = dayOfWeek === "Sun"
          const isHoliday = isSat || isSun
          return (
            <div
              key={day}
              style={{
                textAlign: "center",
                padding: "0.5rem",
                color: isSun ? "red" : isSat ? "blue" : "black",
                fontWeight: isHoliday ? "bold" : "",
              }}>
              {day}
            </div>
          )
        })}
      </div>
    </>
  )
}

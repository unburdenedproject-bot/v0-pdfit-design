"use client"

import * as React from "react"

// Calendar component removed -- react-day-picker is not compatible with React 19.
// Re-add when react-day-picker v9 is stable.

type CalendarProps = React.HTMLAttributes<HTMLDivElement>

function Calendar({ className, ...props }: CalendarProps) {
  return <div className={className} {...props} />
}
Calendar.displayName = "Calendar"

export type { CalendarProps }
export { Calendar }

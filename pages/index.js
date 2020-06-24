import { bind } from "nd"

const Counter = bind(({ count }) => <span>{count || 0}</span>, ["count"])

export default bind(
  ({ set, count }) => (
    <div
      onClick={()=> set((count || 0) + 1, "count")}
    >
      click to add count: <Counter />
    </div>
  ),
  [{"count": 10 }]
)
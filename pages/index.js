import { bind } from "nd"

export default bind(
  ({ set, count }) => (
    <div
      onClick={()=> set((count || 0) + 1, "count")}
    >
      add count: {count　|| 0}
    </div>
  ),
  ["count"]
)
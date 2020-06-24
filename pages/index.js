import { bind } from "nd"

const Counter = bind(({ count }) => <span>{count || 0}</span>, ["count"])

const User = bind(({ user }) => <div>{user}</div>, ["user"])

export default bind(
  ({ init, set, count }) => {
    const fn = init()
    return (
      <div onClick={() => fn.add(1)}>
        click to add count: <Counter />
      </div>
    )
  },
  [
    "count",
    "add"
  ]
)
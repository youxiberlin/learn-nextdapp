import { bind } from "nd"

const Counter = bind(({ count }) => <span>{count || 0}</span>, ["count"])

const User = bind(({ user }) => <span>{user}</span>, ["user"])

export default bind(
  ({ init, set, count }) => {
    const fn = init()
    return (
      <div>
        <div onClick={() => fn.add(1)}>
          click to add count: <Counter />
        </div>
        <div onClick={() => fn.uppercase()}>
          <User />
        </div>
      </div>
    )
  },
  [
    "count",
    "add",
    "uppercase"
  ]
)
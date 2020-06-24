const add = ({ val, props, set }) =>
  set((props.count || 0) + val, "count")
add.props = ["count"]

const uppercase = ({ val, props, set }) =>
  set(props.user.toUpperCase(), "user")
uppercase.props = ["user"]

export { add, uppercase }

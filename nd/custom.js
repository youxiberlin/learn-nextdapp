export const add = ({ val, props, set }) =>
  set((props.count || 0) + val, "count")
add.props = ["count"]
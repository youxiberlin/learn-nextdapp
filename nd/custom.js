export const logConf = async ({ val, set, conf, props, global }) => {
  console.log('props', props)
}
logConf.props = ["count"]

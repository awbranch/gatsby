const { join } = require(`path`)
const { fork } = require(`child_process`)

module.exports = async () => {
  // Submit events on background w/o blocking the main process
  // nor relying on it's lifecycle
  const forked = fork(join(__dirname, `send.js`), {
    detached: true,
    stdio: `ignore`,
  })
  forked.unref()
}

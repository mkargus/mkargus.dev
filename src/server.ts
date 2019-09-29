import app from './app'
import fs from 'fs'

// Start Express Server
app.listen(app.get('port'), function(): void {
  if (process.env.DYNO) {
    fs.openSync('/tmp/app-initialized', 'w');
  }
})

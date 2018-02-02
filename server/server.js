const fs = require('fs');
const https = require('https');
const ws = require('websocket-stream');
const aedes = require('aedes');
const stats = require('aedes-stats');

const port = 8000;

function authenticate(client, username, password, cb) {
  cb(null, true);
}

const mqtt = aedes({
  authenticate
});

let serverOpts = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
const server = https.createServer(serverOpts);

const wsOpts = {
  perMessageDeflate: false,
  server: server
};
ws.createServer(wsOpts, mqtt.handle);

server.listen(port, () => {
  console.log(`MQTT Server listening on ${port} via WSS`);
  console.log(`Server id: ${mqtt.id}`);
});

// Start aedes stats on $SYS/* topics
stats(mqtt);

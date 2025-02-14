"use strict";

module.exports = {
	MessageTypes: {
		CONNECTION: 0,
		MESSAGE: 1,
		REQUEST: 2,
		RESPONSE: 3,
		PING: 4,
		PONG: 5,
		END: 6
	},
	ErrorMessages: {
		BAD_TIMEOUT: "invalid timeout",
		TIMEOUT: "request timed out",
		PREMATURE_PACKET: "ignored data packet received before connection finished establishing",
		BAD_CONNECTIONS: "invalid max number of connections",
		BAD_PORT: "invalid TCP port",
		BAD_PATH: "invalid socket path",
		BAD_URL: "invalid host address",
		BAD_OPTIONS: "invalid options object",
		SERVER_EXISTS: "server already exists",
		EADDRINUSE: "EADDRINUSE: address already in use",
		ORPHAN_CONNECTION: "closing orphaned connection",
		UNKNOWN_ERROR: "unknown error",
		ZLIB_MISSING: "WARNING: compression requires the 'fast-zlib' package to be installed (npm install fast-zlib)",
		MSGPACK_MISSING: "WARNING: messagepack requires the 'msgpackr' package to be installed (npm install msgpackr)",
		SERVER_CLOSED: "Server was shut down",
		CONNECTION_CLOSED: "Failed to send, connection not available",
		CONNECTION_DESTROYED: "Failed to send, connection was destroyed",
		NOT_IDLE: "Client not ready to connect",
		NOT_READY: "Client not ready"
	},
	Events: {
		READY: "ready",
		ERROR: "error",
		STATUS: "status",
		CONNECT: "connect",
		DISCONNECT: "disconnect",
		MESSAGE: "message",
		REQUEST: "request",
		CLOSE: "close"
	},
	ConnectionEvents: {
		ERROR: "error",
		CLOSE: "close",
		DATA: "readable",
		READY: "ready",
		DONE: "done",
		DRAIN: "drain"
	},
	ServerEvents: {
		ERROR: "error",
		CONNECTION: "connection",
		SECURECONNECTION: "secureConnection",
		LISTENING: "listening",
		CLOSE: "close"
	},
	ClientStatus: {
		IDLE: 0,
		CONNECTING: 1,
		CONNECTED: 2,
		READY: 3,
		DISCONNECTED: 4,
		RECONNECTING: 5
	},
	Options: {
		DEFAULT_PATH: "net-ipc",
		DEFAULT_RETRIES: 3,
		DEFAULT_MAXRETRYTIME: 10000,
		DEFAULT_TIMEOUT: 10000,
		DEFAULT_CONNECTIONTIMEOUT: 10000,
		RETRY_INCREMENT: 500,
		DEFAULT_PORT: 4466
	}
};

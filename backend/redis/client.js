// redis-client.js
import Redis from 'ioredis'; // use `import Redis from 'ioredis'` for ESM; for CJS: const Redis = require('ioredis');

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PORT = Number(process.env.REDIS_PORT || 6379);
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || undefined;

const client = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
  connectTimeout: 10000,
  // retry strategy controls how/when it retries on connect failure
  retryStrategy(times) {
    // exponential backoff capped at 2s
    return Math.min(times * 50, 2000);
  },
  // allow unlimited command retries (or tune as needed)
  maxRetriesPerRequest: null,
  // helpful for debugging
  showFriendlyErrorStack: true,
});

// Important: always listen for errors so Node won't crash with "Unhandled error event"
client.on('error', (err) => {
  console.error('[Redis] error', err);
});

client.on('connect', () => console.info('[Redis] connecting...'));
client.on('ready', () => console.info('[Redis] ready'));
client.on('close', () => console.info('[Redis] connection closed'));
client.on('reconnecting', () => console.info('[Redis] reconnecting'));
client.on('end', () => console.info('[Redis] connection ended'));

export { client };

// import { Redis } from "ioredis";

// const client = new Redis();

// export { client };
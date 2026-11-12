const test = require('node:test');
const assert = require('node:assert/strict');

test('application source includes required operational endpoints', async () => {
  const fs = require('node:fs');
  const source = fs.readFileSync('server.js', 'utf8');
  assert.match(source, /app\.get\('\/health'/);
  assert.match(source, /app\.get\('\/ready'/);
  assert.match(source, /app\.get\('\/metrics'/);
  assert.match(source, /app\.get\('\/api\/profile'/);
});

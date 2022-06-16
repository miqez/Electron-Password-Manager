const { randomBytes, createCipheriv, createDecipheriv } = require('crypto');
const path = require('path');
const { SECRET } = require(
  path.resolve('config'),
);

const encrypt = (string) => {
  const iv = randomBytes(16);

  const cipher = createCipheriv(
    'aes-256-cbc',
    Buffer.from(SECRET),
    iv,
  );

  return Buffer.concat([
    iv,
    cipher.update(string),
    cipher.final(),
  ])
    .toString('hex');
};

const decrypt = (hash) => {
  const buffer = Buffer.from(hash, 'hex');

  const decipher = createDecipheriv(
    'aes-256-cbc',
    Buffer.from(SECRET),
    buffer.slice(0, 16),
  );

  return Buffer.concat([
    decipher.update(
      buffer.slice(
        16,
        buffer.length,
      ),
    ),
    decipher.final(),
  ]).toString();
};

module.exports = {
  encrypt,
  decrypt,
};
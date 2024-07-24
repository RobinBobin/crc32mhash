import('node-crc')
  .then(({ crc32mhash }) => crc32mhash(Buffer.from(process.argv[2], 'utf8')).toString('hex'))
  .then(console.log)

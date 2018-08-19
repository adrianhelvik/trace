function trace (source, index, message) {
  let found = false
  let letter = 0
  let line = 0

  for (let i = 0; i < source.length; i++) {
    if (source[i] === '\n') {
      line += 1
      letter = 0
    } else {
      letter += 1
    }
    if (index === i) {
      found = true
      break
    }
  }

  if (! found)
    letter += 1

  const messagePrefix = '^ [' + (line+1) + ':' + (letter) + '] '
  const sourceLine = source.split('\n')[line]
  const preText = (line+1) + ' | '

  message = message.split('\n')
  for (let i = 1; i < message.length; i++)
    message[i] = ' '.repeat(letter + preText.length - 1 + messagePrefix.length) + message[i]
  message = message.join('\n')

  return '\n' + preText + sourceLine + '\n' + ' '.repeat(letter + preText.length - 1) + messagePrefix + message + '\n'
}

module.exports = trace

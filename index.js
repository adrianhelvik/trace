function trace (source, index, message) {
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
      break
    }
  }

  const sourceLine = source.split('\n')[line]
  const preText = (line+1) + ' | '

  return preText + sourceLine + '\n' + ' '.repeat(letter + preText.length - 1) + '^ [' + (line+1) + ':' + (letter) + '] ' + message
}

module.exports = trace

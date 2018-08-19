const trace = require('.')

/**
 * Create better diffs in the tests
 */
const check = (actual, expected) => {
  expect('\n' + actual).toBe('\n' + expected)
}

test('single line', () => {
  const source = 'abc'
  const index = 1
  check(
    trace(source, index, 'This is c'),
    [
      '',
      '1 | abc',
      '     ^ [1:2] This is c',
      '',
    ].join('\n')
  )
})

test('multi line', () => {
  const source = [
    'abc',
    'def',
  ].join('\n')
  const index = 5
  expect('\n' + trace(source, index, 'This is e')).toBe('\n' + [
    '',
    '2 | def',
    '     ^ [2:2] This is e',
    '',
  ].join('\n'))
})

test('multi char line number', () => {
  const source = [
    '', // 1
    '', // 2
    '', // 3
    '', // 4
    '', // 5
    '', // 6
    '', // 7
    '', // 8
    '', // 9
    '', // 10
    '012345678', // 11
  ].join('\n')
  const index = 12

  check(
    trace(source, index, 'This should be 2'),
    [
      '',
      '11 | 012345678',
      '       ^ [11:3] This should be 2',
      '',
    ].join('\n')
  )
})

test('it indents all lines of the message', () => {
  check(
    trace('foo', 1, 'This\nis a\nmultiline message'),
    [
      '',
      '1 | foo',
      '     ^ [1:2] This',
      '             is a',
      '             multiline message',
      '',
    ].join('\n')
  )
})

test('wrong trace from ergolang source', () => {
  const source = '12'
  const index = 2
  const message = 'Expected either one or two, but the entire source had been processed.'

  check(
    trace(source, index, message),
    [
      '',
      '1 | 12',
      '      ^ [1:3] Expected either one or two, but the entire source had been processed.',
      '',
    ].join('\n')
  )
})

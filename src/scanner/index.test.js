import scanner from './index'

describe('parsing html', () => {
  it('should return the most basic plain text', () => {
    const html = '8888'
    const result = scanner.parse(html)
    expect(result).toMatchObject({
      content: html,
      nodes: [],
    })
  })

  it('should create nodes for each H tag', () => {
    const html = 'asdf<h1>bloo</h1>'
    const result = scanner.parse(html)
    expect(result).toMatchObject({
      content: 'asdf',
      nodes: [
        {
          header: '<h1>bloo</h1>',
          content: '',
        }
      ],
    })
  })

  it('should work for 2 h tags', () => {
    const html = `asdf<h1>bloo</h1><h1>blang</h1>`
    const result = scanner.parse(html)
    expect(result).toMatchObject({
      content: 'asdf',
      nodes: [
        {
          header: '<h1>bloo</h1>',
          content: '',
        },
        {
          header: '<h1>blang</h1>',
          content: '',
        }
      ],
    })
  })
})

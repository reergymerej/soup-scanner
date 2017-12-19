const scanner = {
  parse() {
    return {
      content: 'asdf',
      nodes: [],
    }
  },
}

describe('parsing html', () => {
  it('should return an object', () => {
    const html = 'asdf'
    const result = scanner.parse(html)
    expect(result).toMatchObject({
      content: html,
      nodes: [],
    })
  })
})

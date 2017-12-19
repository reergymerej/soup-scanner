import cheerio from 'cheerio'

const isText = el => el.type === 'text'

const isHeader = el => (/h[\d]/).test(el.name)


const parse = (html) => {
  const $ = cheerio.load(html)
  const body = $('body')
  const nodes = body.find('*')
  const contents = body.contents()
  const result = {
    content: '',
    nodes: [],
  }
  contents.map((index, el) => {
    if (isText(el)) {
      const value = $(el).text()
      result.content += value
    } else if (isHeader(el)) {
      const value = $.html(el)
      result.nodes.push({
        header: value,
        content: '',
      })
    }
  })

  return result
}

export default {
  parse,
}

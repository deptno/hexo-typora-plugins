import {removeImageDirFromContent} from './hexo-typora-image'

describe('hexo-typora-image', () => {
  it('image-replace-filter', () => {
    const TC = [
      {
        'typora-copy-images-to': 'aaa',
        content                : '![](aaa/bbb.jpg)',
        expected               : '![](bbb.jpg)',
      },
      {
        'typora-copy-images-to': '',
        content                : '![](aaa/bbb.jpg)',
        expected               : `![](aaa/bbb.jpg)`,
      },
      {
        'typora-copy-images-to': '',
        content                : '![](bbb.jpg)',
        expected               : `![](bbb.jpg)`,
      },
    ]
    TC.map(tc => expect(removeImageDirFromContent(tc).content).toEqual(tc.expected))
  })
})
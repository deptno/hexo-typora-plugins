import {removeImageDirFromContent} from './hexo-typora-image'

declare const hexo: any

hexo.extend.filter.register('before_post_render', removeImageDirFromContent)

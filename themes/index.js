/**
 * 切换主题请修改 blog.config.js 中的 THEME 字段
 */
import * as next from './next'
import * as fukasawa from './fukasawa'
import * as hexo from './hexo'
import * as medium from './medium'
import * as nobelium from './nobelium'
import * as matery from './matery'
import * as simple from './simple'
import * as sense from './sense'

export const ALL_THEME = [
  'sense',
  'hexo',
  'matery',
  'next',
  'medium',
  'fukasawa',
  'nobelium',
  'example',
  'simple'
]
export {
  hexo,
  next,
  medium,
  fukasawa,
  nobelium,
  matery,
  simple,
  sense
}

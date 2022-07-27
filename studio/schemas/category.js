import { TagIcon } from '@sanity/icons'

export default {
  name: 'category',
  title: 'Category',
  icon: TagIcon,
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }
  ]
}
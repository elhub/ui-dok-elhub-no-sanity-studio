export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

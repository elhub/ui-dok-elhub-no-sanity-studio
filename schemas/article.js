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
    {
      // Include the table as a field
      // Giving it a semantic title
      name: 'sizeChart',
      title: 'Size Chart',
      type: 'table',
    },
  ],
}

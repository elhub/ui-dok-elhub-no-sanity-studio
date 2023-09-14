export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Breadcrumb',
      name: 'breadcrumb',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Articles',
      name: 'articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    },
  ],
}

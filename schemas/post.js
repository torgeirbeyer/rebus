export default {
  name: 'post',
  title: 'Oppgave',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Nettsideadresse',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'body',
      title: 'Oppgavetekst',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

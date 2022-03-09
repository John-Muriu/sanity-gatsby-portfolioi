export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622889e152f1be00b0f3b191',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolioi-studio',
                  apiId: 'b8a63216-a169-4a25-b0ce-be9cd038e3ed'
                },
                {
                  buildHookId: '622889e1382f03007d570118',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolioi',
                  apiId: '0ac50be2-3635-422a-ba1e-b711a9c74ca5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/John-Muriu/sanity-gatsby-portfolioi',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolioi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

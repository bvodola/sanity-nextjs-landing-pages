export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ee0260adeb1512f1b3d3396',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pv4ku11q',
                  apiId: '1bc3651a-8e45-446a-a443-7b9e61613213'
                },
                {
                  buildHookId: '5ee0260a43745ed417555aad',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wu6nki36',
                  apiId: '185c038b-85d8-4d73-9d5a-7833370cde37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bvodola/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wu6nki36.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

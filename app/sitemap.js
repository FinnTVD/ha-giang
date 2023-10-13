import getData from '@/utils/getData'
const GET_POSTS = `
{
  posts {
    nodes {
      slug
      date
    }
  }
}
`

const GET_TOURS = `
{
  allTourHG{
    nodes{
      slug
      date
    }
  }
}
`
export default async function sitemap() {
  const posts = await getData(GET_POSTS)
  const tours = await getData(GET_TOURS)
  const arrPosts = posts?.data?.posts?.nodes?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8,
    }
  })
  const arrTours = tours?.data?.allTourHG?.nodes?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/${e?.slug}`,
      lastModified: e?.date,
      priority: 1,
    }
  })
  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/about-us`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${process.env.DOMAIN}/faq`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...arrPosts,
    ...arrTours,
  ]
}

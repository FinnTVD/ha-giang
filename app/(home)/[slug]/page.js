import IndexNotFound from '@/components/not-found'
import IndexTourDetail from '@/components/tourDetail'
import { GET_DETAIL_TOUR } from '@/graphql/tourDetail/queries'
import getData from '@/utils/getData'

export default async function page({ params }) {
  const data = await getData(GET_DETAIL_TOUR, { slug: params?.slug })
  if (!data?.data?.tourHG) return <IndexNotFound />
  return (
    <IndexTourDetail
      data={data}
      allTourHG={data?.data?.allTourHG}
      slug={params?.slug}
    />
  )
}

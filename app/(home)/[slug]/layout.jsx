import Header from "@/components/global/Header"
import { GET_DATA_HOME } from "@/graphql/home/queries"
import getData from "@/utils/getData"

const MainLayout = async ({ children }) => {
  const data = await getData(GET_DATA_HOME)
  const homeHG = data?.data?.page?.homeHG
  const allTourHG = data?.data?.allTourHG

  const header = homeHG?.header
  return (
    <div>
      <Header
        header={header}
        allTourHG={allTourHG}
        isHome={true}
      />
      <main className='relative w-full overflow-x-hidden'>{children}</main>
    </div>
  )
}

export default MainLayout

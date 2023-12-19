import Family from '../homepage/Family'
import HeaderContact from './HeaderContact'
import MapContact from './MapContact'

export default function IndexContact({ data, dataFooter, dataHome, viewport }) {
  return (
    <>
      <HeaderContact
        dataHome={dataFooter}
        data={data?.header}
        viewport={viewport}
      />
      <main>
        <MapContact
          data={data}
          footer={dataFooter?.data?.page?.homeHG?.footer}
        />
        <Family
          section6={dataHome?.data?.page?.homeHG?.section6}
          viewport={viewport}
        />
      </main>
    </>
  )
}

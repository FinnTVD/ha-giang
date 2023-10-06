'use client'
import HeaderContact from './HeaderContact'
import MapContact from './MapContact'

export default function IndexContact({ data, dataHome }) {
    return (
        <>
            <HeaderContact
                dataHome={dataHome}
                data={data?.header}
            />
            <main>
                <MapContact
                    data={data}
                    footer={dataHome?.data?.page?.homeHG?.footer}
                />
            </main>
        </>
    )
}

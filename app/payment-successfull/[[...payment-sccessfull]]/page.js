import PaymentSuccessFulPage from '@/components/payment-successfull'
import { fCurrency } from '@/lib/utils'
import { exchangeRate } from '@/utils'
import getData from '@/utils/getData'
// import dynamic from 'next/dynamic'

const GET_DETAIL_TOURID = (id) => `{
  tourHG(id:"${id}",idType:ID){
    title
    tourHaGiangDetail{
      price{
        selfDriving
        localDriver
        pickUp{
          province
          listAddress{
            address
          }
        }
        droff{
          province
          listAddress{
            address
          }
        }
        longTimeTourDay
      }
    }
  }
}`

// const PaymentSuccessFulPage = dynamic(() => import('@/components/payment-successfull'), { ssr: false })
export default async function PaymentSuccessFul({ params, searchParams }) {
  const data = await getData(GET_DETAIL_TOURID(decodeURIComponent(params['payment-sccessfull']?.[0])))

  const dataTour = data?.data?.tourHG
  const options = params['payment-sccessfull']?.[1]?.split('')
  const selfCost =
    Number(params['payment-sccessfull']?.[4]) * Number(dataTour?.tourHaGiangDetail?.price?.selfDriving) * exchangeRate
  const localCose =
    Number(params['payment-sccessfull']?.[5]) * Number(dataTour?.tourHaGiangDetail?.price?.localDriver) * exchangeRate
  const totalPrice = selfCost + localCose
  const servicePrice = totalPrice * 0.03
  const formData = {
    nameTour: dataTour?.title,
    name:
      searchParams?.vpc_OrderInfo +
      ' - ' +
      (Number(params['payment-sccessfull']?.[4]) + Number(params['payment-sccessfull']?.[5])) +
      ' pax',
    email: decodeURIComponent(params['payment-sccessfull']?.[3]),
    contactInfo: decodeURIComponent(params['payment-sccessfull']?.[3]) + ' - ' + params['payment-sccessfull']?.[2],
    pickUp:
      params['payment-sccessfull']?.[6]?.replaceAll('-', '/') +
      ' from ' +
      dataTour?.tourHaGiangDetail?.price?.pickUp[Number(options[0])]?.province +
      ' at ' +
      dataTour?.tourHaGiangDetail?.price?.pickUp[Number(options[0])]?.listAddress?.[Number(options[1])]?.address,
    tourDuration: dataTour?.tourHaGiangDetail?.price?.longTimeTourDay + ' Days',
    droffOf:
      params['payment-sccessfull']?.[7]?.replaceAll('-', '/') +
      ' to ' +
      dataTour?.tourHaGiangDetail?.price?.droff[Number(options[0])]?.province +
      ' at ' +
      dataTour?.tourHaGiangDetail?.price?.droff[Number(options[0])]?.listAddress?.[Number(options[1])]?.address,
    selfDriving:
      Number(params['payment-sccessfull']?.[4]) +
      ' x $' +
      dataTour?.tourHaGiangDetail?.price?.selfDriving +
      ' (' +
      fCurrency(selfCost) +
      ' VND)',
    localDriver:
      Number(params['payment-sccessfull']?.[5]) +
      ' x $' +
      dataTour?.tourHaGiangDetail?.price?.localDriver +
      ' (' +
      fCurrency(localCose) +
      ' VND)',
    message: 'miss message because user share link payment',
    provisional: fCurrency(totalPrice) + ' VND',
    serviceCharge: fCurrency(totalPrice * 0.03) + ' VND',
    total: fCurrency(totalPrice + servicePrice) + ' VND',
  }
  return (
    <div className='flex items-center justify-center w-full h-screen bg-primary-5'>
      <PaymentSuccessFulPage
        searchParams={searchParams}
        params={params}
        formDataNew={formData}
      />
    </div>
  )
}

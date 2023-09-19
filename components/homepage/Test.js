import Link from 'next/link'

export default function Test() {
    return (
        <div>
            <Link
                href='https://mtf.onepay.vn/paygate/vpcpay.op?vpc_Version=2&vpc_Currency=VND&vpc_Command=pay&vpc_AccessCode=6BEB2546&vpc_Merchant=TESTONEPAY&vpc_Locale=vn&vpc_ReturnURL=http://localhost:3000/&vpc_MerchTxnRef=8323298463249823423&vpc_OrderInfo=quanao&vpc_Amount=500000&vpc_TicketNo=113.23.74.47&AgainLink=http://localhost:3000/&Title=KANGNAM&vpc_SecureHash=6D0870CDE5F24F34F3915FB0045120DB'
                target='_blank'
            >
                one page
            </Link>
            <Link
                href='https://mtf.onepay.vn/paygate/vpcpay.op?vpc_Version=2&vpc_Currency=VND&vpc_Command=pay&vpc_AccessCode=6BEB2566&vpc_Merchant=TESTONEPAY32&vpc_Locale=vn&vpc_ReturnURL=https://ha-giang.vercel.app&vpc_MerchTxnRef=duc210601&vpc_OrderInfo=ducmuaquanao&vpc_Amount=1000000&vpc_TicketNo=113.23.74.47&AgainLink=https://ha-giang.vercel.app&Title=KANGNAMPAY&vpc_SecureHash=6D0870CDE5F24F34F3915FB0045120D6'
                target='_blank'
            >
                one page 2
            </Link>
            <br />

            <Link href={'https://mtf.onepay.vn/paygate/?id=INV-DW9HSTL74X6GMAEU&locale=en'}>pro</Link>
        </div>
    )
}
// https://matkinhbvcnc.com.vn/checkout/order-received/6204/?key=wc_order_yfSCyH0wsY694&vpc_Amount=933000000&vpc_Command=pay&vpc_MerchTxnRef=20230917135500378045336&vpc_Merchant=TESTONEPAY32&vpc_Message=Canceled&vpc_OrderInfo=6204&vpc_TxnResponseCode=99&vpc_Version=2&vpc_SecureHash=709B430368A8DBFB73CAAAF6E450736222DA4DA55FD451EBDFD185B272168623

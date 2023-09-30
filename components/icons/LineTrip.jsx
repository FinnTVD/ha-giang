import React from 'react'
import { useMediaQuery } from 'react-responsive'

const LineTrip = ({ dayAmount, className }) => {
    const isLarge = useMediaQuery({ query: '(max-width: 1650px)' })
    console.log(isLarge)
    return (
        <svg
            className={className}
            width='742'
            height='194%'
            viewBox='0 0 742 144'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <ellipse
                cx='248.652'
                cy='61.7884'
                rx='1.78058'
                ry='1.7806'
                fill='url(#paint0_linear_1_2)'
            />
            <ellipse
                cx='4.87539'
                cy='3.14941'
                rx='4.87539'
                ry='3.14941'
                transform='matrix(0.941958 0.335729 -0.335724 0.941961 237.685 53.8906)'
                fill='url(#paint1_linear_1_2)'
            />
            <g clipPath='url(#clip0_1_2)'>
                <path
                    d='M275.158 59.1562C272.258 59.1562 269.885 61.5292 269.885 64.4297C269.885 67.3301 272.258 69.7031 275.158 69.7031C278.058 69.7031 280.431 67.3301 280.431 64.4297C280.431 61.5292 278.058 59.1562 275.158 59.1562ZM275.158 67.9453C273.224 67.9453 271.642 66.3632 271.642 64.4297C271.642 62.4962 273.224 60.9141 275.158 60.9141C277.091 60.9141 278.674 62.4962 278.674 64.4297C278.674 66.3632 277.091 67.9453 275.158 67.9453Z'
                    fill='#B34B1E'
                />
                <path
                    d='M255.705 59.1562C252.805 59.1562 250.432 61.5292 250.432 64.4297C250.432 67.3301 252.805 69.7031 255.705 69.7031C258.605 69.7031 260.978 67.3301 260.978 64.4297C260.978 61.5292 258.605 59.1562 255.705 59.1562ZM255.705 67.9453C253.772 67.9453 252.189 66.3632 252.189 64.4297C252.189 62.4962 253.772 60.9141 255.705 60.9141C257.639 60.9141 259.221 62.4962 259.221 64.4297C259.221 66.3632 257.639 67.9453 255.705 67.9453Z'
                    fill='#B34B1E'
                />
                <path
                    d='M257.463 53.8828H266.369V59.1562H257.463V53.8828ZM270.763 50.3672H269.006C268.52 50.3672 268.127 49.9741 268.127 49.4883C268.127 49.0025 268.52 48.6094 269.006 48.6094H270.763C271.249 48.6094 271.642 49.0025 271.642 49.4883C271.642 49.9741 271.249 50.3672 270.763 50.3672Z'
                    fill='#F6B900'
                />
                <path
                    d='M275.65 65.1641C275.492 65.252 275.334 65.3048 275.158 65.3048C274.877 65.3048 274.596 65.1641 274.42 64.9181L270.306 58.7658C270.025 58.3614 270.148 57.8165 270.535 57.5353C270.939 57.2716 271.484 57.377 271.765 57.7813L275.158 62.8264L275.896 63.9337C276.16 64.338 276.054 64.8829 275.65 65.1641ZM265.49 62.6681V66.1837H255.705C254.738 66.1837 253.947 65.3927 253.947 64.4259C253.947 63.4591 254.738 62.6681 255.705 62.6681H265.49Z'
                    fill='#F6B900'
                />
                <path
                    d='M270.763 48.6094C270.271 48.6094 269.885 48.996 269.885 49.4883V52.125H267.248C266.949 52.125 266.685 52.2657 266.51 52.5117L263.199 57.3984H260.574L257.779 53.2148C257.322 52.5293 256.566 52.125 255.74 52.125H251.311C250.818 52.125 250.432 52.5117 250.432 53.0039C250.432 55.254 252.137 57.1347 254.334 57.3632L257.146 61.582C257.603 62.2676 258.359 62.6719 259.185 62.6719H261.312L261.916 63.7793L262.443 64.8339C262.865 65.6602 263.709 66.1875 264.658 66.1875H265.947C267.125 66.1875 268.127 65.3614 268.355 64.2012L268.496 63.586C269.199 59.9999 272.381 57.3984 276.037 57.3984C276.529 57.3984 276.916 57.0118 276.916 56.5195V54.7617C276.916 51.3691 274.156 48.6094 270.763 48.6094Z'
                    fill='#B34B1E'
                />
            </g>
            <text
                fill='#B34B1E'
                // xml:space='preserve'
                style={{ whiteSpace: 'pre' }}
                fontFamily='Poppins'
                fontSize='16'
                fontWeight='600'
                letterSpacing='0.0125em'
            >
                <tspan
                    x='292.431'
                    y='64.7563'
                >
                    Enjoin {dayAmount} In Ha Giang.
                </tspan>
            </text>
            <path
                d='M11.1168 4C11.1168 6.20914 12.9077 8 15.1168 8C17.326 8 19.1168 6.20914 19.1168 4C19.1168 1.79086 17.326 0 15.1168 0C12.9077 0 11.1168 1.79086 11.1168 4ZM15.1168 3.25H12.5876V4.75H15.1168V3.25ZM7.5292 3.25H5V4.75H7.5292V3.25ZM5 3.25C2.37665 3.25 0.25 5.37665 0.25 8H1.75C1.75 6.20507 3.20507 4.75 5 4.75V3.25ZM0.25 8V11.9167H1.75V8H0.25ZM0.25 19.75V27.5833H1.75V19.75H0.25ZM0.25 35.4167V43.25H1.75V35.4167H0.25ZM0.25 51.0833V55H1.75V51.0833H0.25ZM0.25 55C0.25 57.6234 2.37665 59.75 5 59.75V58.25C3.20507 58.25 1.75 56.7949 1.75 55H0.25ZM5 59.75H9.13461V58.25H5V59.75ZM17.4038 59.75H25.6731V58.25H17.4038V59.75ZM33.9423 59.75H42.2115V58.25H33.9423V59.75ZM50.4808 59.75H58.75V58.25H50.4808V59.75ZM67.0192 59.75H75.2885V58.25H67.0192V59.75ZM83.5577 59.75H91.8269V58.25H83.5577V59.75ZM100.096 59.75H108.365V58.25H100.096V59.75ZM116.635 59.75H124.904V58.25H116.635V59.75ZM133.173 59.75H141.442V58.25H133.173V59.75ZM149.712 59.75H157.981V58.25H149.712V59.75ZM166.25 59.75H174.519V58.25H166.25V59.75ZM182.788 59.75H191.058V58.25H182.788V59.75ZM199.327 59.75H207.596V58.25H199.327V59.75ZM215.865 59.75H220V58.25H215.865V59.75Z'
                fill='#FEBA9D'
            />
            <path
                d='M722.991 139.336C722.991 141.545 724.782 143.336 726.991 143.336C729.2 143.336 730.991 141.545 730.991 139.336C730.991 137.127 729.2 135.336 726.991 135.336C724.782 135.336 722.991 137.127 722.991 139.336ZM519.709 59.9062H523.591V58.4062H519.709V59.9062ZM531.354 59.9062H539.118V58.4062H531.354V59.9062ZM546.882 59.9062H554.645V58.4062H546.882V59.9062ZM562.409 59.9062H570.173V58.4062H562.409V59.9062ZM577.936 59.9062H585.7V58.4062H577.936V59.9062ZM593.464 59.9062H601.227V58.4062H593.464V59.9062ZM608.991 59.9062H616.755V58.4062H608.991V59.9062ZM624.518 59.9062H632.282V58.4062H624.518V59.9062ZM640.046 59.9062H647.809V58.4062H640.046V59.9062ZM655.573 59.9062H663.337V58.4062H655.573V59.9062ZM671.1 59.9062H678.864V58.4062H671.1V59.9062ZM686.628 59.9062H694.392V58.4062H686.628V59.9062ZM702.155 59.9062H709.919V58.4062H702.155V59.9062ZM717.683 59.9062H725.446V58.4062H717.683V59.9062ZM733.21 59.9062H737.092V58.4062H733.21V59.9062ZM737.092 59.9062C738.887 59.9062 740.342 61.3613 740.342 63.1562H741.842C741.842 60.5329 739.715 58.4062 737.092 58.4062V59.9062ZM740.342 63.1562V66.7652H741.842V63.1562H740.342ZM740.342 73.9832V81.2012H741.842V73.9832H740.342ZM740.342 88.4191V95.6371H741.842V88.4191H740.342ZM740.342 102.855V110.073H741.842V102.855H740.342ZM740.342 117.291V124.509H741.842V117.291H740.342ZM740.342 131.727V135.336H741.842V131.727H740.342ZM740.342 135.336C740.342 137.131 738.887 138.586 737.092 138.586V140.086C739.715 140.086 741.842 137.959 741.842 135.336H740.342ZM737.092 138.586H734.566V140.086H737.092V138.586ZM729.516 138.586H726.991V140.086H729.516V138.586Z'
                fill='#FEBA9D'
            />
            <defs>
                <linearGradient
                    id='paint0_linear_1_2'
                    x1='250.432'
                    y1='62.7865'
                    x2='247.494'
                    y2='60.2843'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#B34B1E' />
                    <stop
                        offset='1'
                        stopColor='white'
                        stopOpacity='0'
                    />
                </linearGradient>
                <linearGradient
                    id='paint1_linear_1_2'
                    x1='10.2208'
                    y1='2.82261'
                    x2='3.89514'
                    y2='0.157426'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop
                        offset='0.0274992'
                        stopColor='#B34B1E'
                    />
                    <stop
                        offset='1'
                        stopColor='white'
                        stopOpacity='0'
                    />
                </linearGradient>
                <clipPath id='clip0_1_2'>
                    <rect
                        width='29.9997'
                        height='30'
                        fill='white'
                        transform='translate(250.432 44.1562)'
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default LineTrip

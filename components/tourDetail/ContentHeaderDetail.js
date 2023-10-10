import Image from 'next/image'
import TittleIcon from './TittleIcon'

export default function ContentHeaderDetail({ data, slug }) {
  return (
    <div className='relative z-[10] lg:pl-[6.25rem] lg:m-[2.31rem] max-md:absolute max-md:left-[4.27rem] max-md:bottom-[21rem]'>
      <span className='text-white uppercase font-heavitas text-[1rem] font-normal leading-normal max-md:text-[3.2rem]'>
        {data?.subtitle}
      </span>
      <h1
        className={`${
          slug === 'epic-motorbike-tour-4d4n' ? 'w-[40rem]' : 'w-[32.3125rem]'
        } uppercase mt-[1rem] max-md:mt-[2.13rem] font-heavitas text-[4rem] font-normal leading-[1] text-white max-md:w-[59.51rem] max-md:text-[7.467rem] max-md:leading-[1]`}
      >
        {data?.title}
      </h1>
      <div className='w-[15.3125rem] h-[3.375rem] max-md:w-[44.039rem] max-md:h-[11.8264rem] relative flex justify-center items-center lg:mt-[1.75rem] 2xl:mt-[2.75rem] max-md:my-[4.27rem] lg:mb-[1.5rem] 2xl:mb-[2.5rem] font-poppins'>
        <Image
          className='object-cover max-md:object-contain'
          src={'/images/bg-time-detail.png'}
          fill
          sizes='100rem'
          priority
        />
        <span className='relative text-[1rem] font-semibold leading-normal tracking-[0.0125rem] text-gray-scale-80 uppercase max-md:text-[3.467rem] max-md:leading-[1.38]'>
          {data?.timeTour}
        </span>
      </div>
      <div className='flex gap-x-[1.88rem] max-md:gap-x-[8.53rem] font-poppins'>
        <div className='w-[18rem] max-md:hidden'>
          <TittleIcon title={'HIGHLIGHT'}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='17'
              viewBox='0 0 14 17'
              fill='none'
              className='w-[1rem] h-[1rem]'
            >
              <path
                d='M11.6955 2.90109C9.09822 0.303804 4.90258 0.303804 2.3386 2.90109C-0.258699 5.49838 -0.258699 9.66068 2.3386 12.258L7.0004 16.9531L11.6622 12.2913C14.2595 9.69399 14.2595 5.49838 11.6955 2.90109Z'
                fill='#F6B900'
              />
              <path
                d='M10.1954 10.7578C8.43055 12.5227 5.60015 12.5227 3.83533 10.7578C2.07051 8.99303 2.07051 6.16264 3.83533 4.39783C5.60015 2.63302 8.43055 2.63302 10.1954 4.39783C11.9269 6.16264 11.9269 9.02634 10.1954 10.7578Z'
                fill='white'
              />
              <path
                d='M3.33594 7.66348L6.33282 8.26285L6.93219 11.2597L9.4629 5.13281L3.33594 7.66348Z'
                fill='#F6B900'
              />
            </svg>
          </TittleIcon>
          <ul
            className='mt-[0.13rem] list-disc ml-[2.5rem]'
            style={{
              background:
                'linear-gradient(45deg, rgba(217,217,217,1) 0%, rgba(217,217,217,0) 100%) no-repeat top left/auto 1px',
            }}
          >
            {data?.highlight?.slice(0, 6)?.map((e, index) => (
              <li
                key={index}
                className='text-[0.875rem] font-bold leading-[1.57] tracking-[0.00219rem] text-white'
              >
                {e?.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-[13.0625rem] max-md:w-fit flex flex-col gap-y-[1.44rem]'>
          <div className='flex flex-col items-start'>
            <TittleIcon title={'DEPARTURE'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
                className='w-[1rem] h-[1rem] max-md:w-[4.267rem] max-md:h-[4.267rem]'
              >
                <circle
                  cx='8'
                  cy='8.94922'
                  r='4.5'
                  fill='white'
                />
                <path
                  d='M8.00039 3.34766C6.89282 3.34766 5.81011 3.67609 4.8892 4.29143C3.96828 4.90676 3.25052 5.78136 2.82667 6.80463C2.40282 7.82789 2.29192 8.95387 2.508 10.0402C2.72407 11.1265 3.25742 12.1243 4.04059 12.9075C4.82377 13.6906 5.82159 14.224 6.90789 14.4401C7.99418 14.6561 9.12015 14.5452 10.1434 14.1214C11.1667 13.6975 12.0413 12.9798 12.6566 12.0588C13.272 11.1379 13.6004 10.0552 13.6004 8.94765C13.5988 7.46292 13.0083 6.03944 11.9585 4.98957C10.9086 3.93971 9.48513 3.34921 8.00039 3.34766ZM10.5497 10.8783C10.5001 10.9412 10.4369 10.9921 10.3649 11.0272C10.2928 11.0623 10.2138 11.0807 10.1337 11.081C10.0131 11.082 9.89606 11.0404 9.80306 10.9637L7.66972 9.36365C7.60687 9.31399 7.55601 9.2508 7.52092 9.17878C7.48584 9.10676 7.46743 9.02776 7.46706 8.94765V5.21432C7.46706 5.07287 7.52325 4.93722 7.62327 4.8372C7.72329 4.73718 7.85894 4.68099 8.00039 4.68099C8.14184 4.68099 8.2775 4.73718 8.37751 4.8372C8.47753 4.93722 8.53372 5.07287 8.53372 5.21432V8.69165L10.4644 10.1317C10.5199 10.1744 10.5662 10.2279 10.6007 10.289C10.6351 10.35 10.657 10.4173 10.6649 10.4869C10.6729 10.5566 10.6668 10.6271 10.647 10.6943C10.6272 10.7615 10.5941 10.8241 10.5497 10.8783Z'
                  fill='#F6B900'
                />
                <path
                  d='M8 0.949219C6.41775 0.949219 4.87103 1.41841 3.55544 2.29746C2.23985 3.17651 1.21447 4.42594 0.608967 5.88775C0.00346635 7.34956 -0.15496 8.95809 0.153721 10.5099C0.462403 12.0618 1.22433 13.4872 2.34315 14.6061C3.46197 15.7249 4.88743 16.4868 6.43928 16.7955C7.99113 17.1042 9.59966 16.9457 11.0615 16.3402C12.5233 15.7347 13.7727 14.7094 14.6518 13.3938C15.5308 12.0782 16 10.5315 16 8.94922C15.9975 6.82826 15.1538 4.79491 13.654 3.29517C12.1543 1.79543 10.121 0.951759 8 0.949219ZM8 15.6516C6.67439 15.6516 5.37855 15.2585 4.27635 14.5221C3.17414 13.7856 2.31508 12.7388 1.80779 11.5141C1.3005 10.2894 1.16777 8.94178 1.42639 7.64164C1.685 6.34151 2.32334 5.14725 3.26069 4.2099C4.19804 3.27256 5.39229 2.63422 6.69243 2.3756C7.99257 2.11699 9.34019 2.24972 10.5649 2.75701C11.7896 3.2643 12.8364 4.12336 13.5728 5.22556C14.3093 6.32777 14.7024 7.62361 14.7024 8.94922C14.7007 10.7263 13.994 12.4301 12.7374 13.6867C11.4809 14.9432 9.77707 15.6499 8 15.6516Z'
                  fill='white'
                />
              </svg>
            </TittleIcon>
            <span
              className='text-[0.875rem] font-bold leading-[1.57] tracking-[0.00219rem] text-white mt-[0.13rem] max-md:mt-[0.53rem] ml-[1.38rem] max-md:text-[3.733rem] max-md:font-semibold max-md:ml-[5.8rem]'
              style={{
                background:
                  'linear-gradient(45deg, rgba(217,217,217,1) 0%, rgba(217,217,217,0) 100%) no-repeat top left/auto 1px',
              }}
            >
              {data?.departure}
            </span>
          </div>
          <div className='max-md:hidden'>
            <TittleIcon title={'PICK UP FROM'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
                className='w-[1rem] h-[1rem]'
              >
                <g clip-path='url(#clip0_6258_8222)'>
                  <path
                    d='M15.7897 7.41179L13.5085 5.48922V2.76001C13.5086 2.69298 13.4955 2.6266 13.4699 2.56465C13.4443 2.5027 13.4068 2.4464 13.3594 2.39897C13.312 2.35155 13.2558 2.31392 13.1939 2.28825C13.1319 2.26258 13.0656 2.24937 12.9985 2.24937H11.382C11.3149 2.24928 11.2484 2.26243 11.1864 2.28806C11.1244 2.31369 11.0681 2.3513 11.0207 2.39874C10.9732 2.44617 10.9356 2.5025 10.91 2.56449C10.8844 2.62649 10.8712 2.69293 10.8713 2.76001V3.26599L8.44476 1.22075C8.32355 1.10656 8.16331 1.04297 7.99678 1.04297C7.83026 1.04297 7.67002 1.10656 7.54881 1.22075L0.210487 7.41179C0.113394 7.50218 0.0457616 7.61971 0.0163935 7.74907C-0.0129747 7.87843 -0.00271825 8.01364 0.0458277 8.13709C0.094701 8.25978 0.179294 8.36496 0.288645 8.43901C0.397997 8.51306 0.527067 8.55257 0.659132 8.5524H1.72041V16.2067C1.72041 16.5687 2.01707 16.866 2.38038 16.866H13.6199C13.7948 16.8657 13.9624 16.796 14.0861 16.6723C14.2098 16.5486 14.2795 16.381 14.2798 16.206V8.55307H15.3411C15.4741 8.55326 15.604 8.513 15.7135 8.43763C15.823 8.36226 15.9071 8.25535 15.9544 8.13109C16.0025 8.00865 16.0125 7.87455 15.9831 7.74633C15.9538 7.61811 15.8864 7.50107 15.7897 7.41179ZM8.49809 14.4688C8.43158 14.5593 8.34469 14.6329 8.24446 14.6837C8.14423 14.7344 8.03346 14.7608 7.92112 14.7608C7.80878 14.7608 7.69802 14.7344 7.59778 14.6837C7.49755 14.6329 7.41067 14.5593 7.34415 14.4688C6.43419 13.2162 4.7596 10.7503 4.7596 9.48503C4.76102 8.64673 5.09507 7.84326 5.68839 7.25106C6.28172 6.65885 7.08582 6.32633 7.92412 6.32651C8.76242 6.32633 9.56652 6.65885 10.1598 7.25106C10.7532 7.84326 11.0872 8.64673 11.0886 9.48503C11.0886 10.7503 9.41405 13.2162 8.49809 14.4688Z'
                    fill='#F6B900'
                  />
                  <path
                    d='M8 11.2656C9.10457 11.2656 10 10.3702 10 9.26563C10 8.16106 9.10457 7.26562 8 7.26562C6.89543 7.26562 6 8.16106 6 9.26563C6 10.3702 6.89543 11.2656 8 11.2656Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_6258_8222'>
                    <rect
                      width='16'
                      height='16'
                      fill='white'
                      transform='translate(0 0.953125)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </TittleIcon>
            <address
              className='not-italic text-white text-[0.875rem] font-bold leading-[1.57] tracking-[0.00219rem] ml-[1.375rem]'
              style={{
                background:
                  'linear-gradient(45deg, rgba(217,217,217,1) 0%, rgba(217,217,217,0) 100%) no-repeat top left/auto 1px',
              }}
            >
              {data?.pickUpFrom}
            </address>
          </div>
        </div>
        <div className='w-[12.6875rem] flex flex-col gap-y-[1.44rem] max-md:w-fit'>
          <div className='flex flex-col items-start'>
            <TittleIcon title={'GROUP SIZE'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
                className='w-[1rem] h-[1rem] max-md:w-[4.267rem] max-md:h-[4.267rem]'
              >
                <circle
                  cx='8'
                  cy='8.94922'
                  r='4.5'
                  fill='white'
                />
                <path
                  d='M8.00039 3.34766C6.89282 3.34766 5.81011 3.67609 4.8892 4.29143C3.96828 4.90676 3.25052 5.78136 2.82667 6.80463C2.40282 7.82789 2.29192 8.95387 2.508 10.0402C2.72407 11.1265 3.25742 12.1243 4.04059 12.9075C4.82377 13.6906 5.82159 14.224 6.90789 14.4401C7.99418 14.6561 9.12015 14.5452 10.1434 14.1214C11.1667 13.6975 12.0413 12.9798 12.6566 12.0588C13.272 11.1379 13.6004 10.0552 13.6004 8.94765C13.5988 7.46292 13.0083 6.03944 11.9585 4.98957C10.9086 3.93971 9.48513 3.34921 8.00039 3.34766ZM10.5497 10.8783C10.5001 10.9412 10.4369 10.9921 10.3649 11.0272C10.2928 11.0623 10.2138 11.0807 10.1337 11.081C10.0131 11.082 9.89606 11.0404 9.80306 10.9637L7.66972 9.36365C7.60687 9.31399 7.55601 9.2508 7.52092 9.17878C7.48584 9.10676 7.46743 9.02776 7.46706 8.94765V5.21432C7.46706 5.07287 7.52325 4.93722 7.62327 4.8372C7.72329 4.73718 7.85894 4.68099 8.00039 4.68099C8.14184 4.68099 8.2775 4.73718 8.37751 4.8372C8.47753 4.93722 8.53372 5.07287 8.53372 5.21432V8.69165L10.4644 10.1317C10.5199 10.1744 10.5662 10.2279 10.6007 10.289C10.6351 10.35 10.657 10.4173 10.6649 10.4869C10.6729 10.5566 10.6668 10.6271 10.647 10.6943C10.6272 10.7615 10.5941 10.8241 10.5497 10.8783Z'
                  fill='#F6B900'
                />
                <path
                  d='M8 0.949219C6.41775 0.949219 4.87103 1.41841 3.55544 2.29746C2.23985 3.17651 1.21447 4.42594 0.608967 5.88775C0.00346635 7.34956 -0.15496 8.95809 0.153721 10.5099C0.462403 12.0618 1.22433 13.4872 2.34315 14.6061C3.46197 15.7249 4.88743 16.4868 6.43928 16.7955C7.99113 17.1042 9.59966 16.9457 11.0615 16.3402C12.5233 15.7347 13.7727 14.7094 14.6518 13.3938C15.5308 12.0782 16 10.5315 16 8.94922C15.9975 6.82826 15.1538 4.79491 13.654 3.29517C12.1543 1.79543 10.121 0.951759 8 0.949219ZM8 15.6516C6.67439 15.6516 5.37855 15.2585 4.27635 14.5221C3.17414 13.7856 2.31508 12.7388 1.80779 11.5141C1.3005 10.2894 1.16777 8.94178 1.42639 7.64164C1.685 6.34151 2.32334 5.14725 3.26069 4.2099C4.19804 3.27256 5.39229 2.63422 6.69243 2.3756C7.99257 2.11699 9.34019 2.24972 10.5649 2.75701C11.7896 3.2643 12.8364 4.12336 13.5728 5.22556C14.3093 6.32777 14.7024 7.62361 14.7024 8.94922C14.7007 10.7263 13.994 12.4301 12.7374 13.6867C11.4809 14.9432 9.77707 15.6499 8 15.6516Z'
                  fill='white'
                />
              </svg>
            </TittleIcon>
            <span
              className='text-[0.875rem] font-bold leading-[1.57] tracking-[0.00219rem] text-white mt-[0.13rem] block max-md:mt-[0.53rem] max-md:text-[3.733rem] max-md:font-semibold ml-[1.375rem] max-md:ml-[5.8rem]'
              style={{
                background:
                  'linear-gradient(45deg, rgba(217,217,217,1) 0%, rgba(217,217,217,0) 100%) no-repeat top left/auto 1px',
              }}
            >
              {data?.groupSize}
            </span>
          </div>
          <div className='max-md:hidden'>
            <TittleIcon title={'TRANSPORT'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
                className='w-[1rem] h-[1rem]'
              >
                <g clipPath='url(#clip0_6258_8199)'>
                  <rect
                    x='2.28906'
                    y='2.57422'
                    width='10.9688'
                    height='8.44922'
                    fill='white'
                  />
                  <circle
                    cx='3.99805'
                    cy='12.3281'
                    r='2'
                    fill='white'
                  />
                  <circle
                    cx='11.998'
                    cy='12.3281'
                    r='2'
                    fill='white'
                  />
                  <path
                    d='M8.00053 0.957031C4.2784 0.957031 1.26367 1.3781 1.26367 4.32544V12.7465C1.26367 13.4918 1.59209 14.1528 2.10576 14.616V16.1149C2.10576 16.5781 2.48471 16.957 2.94786 16.957H3.78999C4.25736 16.957 4.63208 16.5781 4.63208 16.1149V15.2728H11.3689V16.1149C11.3689 16.5781 11.7437 16.957 12.211 16.957H13.0531C13.5163 16.957 13.8952 16.5781 13.8952 16.1149V14.616C14.4089 14.1529 14.7373 13.4918 14.7373 12.7465V4.32544C14.7374 1.3781 11.7226 0.957031 8.00053 0.957031ZM4.21106 13.5886C3.51209 13.5886 2.9479 13.0244 2.9479 12.3255C2.9479 11.6265 3.51209 11.0623 4.21106 11.0623C4.91002 11.0623 5.47422 11.6265 5.47422 12.3255C5.47422 13.0244 4.90998 13.5886 4.21106 13.5886ZM11.79 13.5886C11.091 13.5886 10.5268 13.0244 10.5268 12.3255C10.5268 11.6265 11.091 11.0623 11.79 11.0623C12.489 11.0623 13.0532 11.6265 13.0532 12.3255C13.0532 13.0244 12.4889 13.5886 11.79 13.5886ZM13.0532 8.53598H2.9479V4.32544H13.0532V8.53598Z'
                    fill='#F6B900'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_6258_8199'>
                    <rect
                      width='16'
                      height='16'
                      fill='white'
                      transform='translate(0 0.953125)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </TittleIcon>
            <span
              className='not-italic block text-white text-[0.875rem] font-bold leading-[1.57] tracking-[0.00219rem] ml-[1.375rem]'
              style={{
                background:
                  'linear-gradient(45deg, rgba(217,217,217,1) 0%, rgba(217,217,217,0) 100%) no-repeat top left/auto 1px',
              }}
            >
              {data?.transport}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

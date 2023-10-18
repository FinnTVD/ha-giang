'use client'
import ReactPlayer from 'react-player'
import classes from './WelcomeStyles.module.css'

export default function Welcome({ overview, video }) {
  return (
    <section className='mt-[2.25rem] w-[40.625rem] my-0 mx-auto max-md:mt-[11.2rem] max-md:w-full max-lg:w-[65rem]'>
      <div className='flex flex-col items-center max-md:hidden'>
        <h3
          data-aos='fade-up'
          className='text-[#B34B1E] font-heavitas text-[1rem] leading-[1] max-md:text-[3.2rem] max-lg:text-[2.08rem]'
        >
          {overview?.topTitle}
        </h3>
        <h2
          data-aos='fade-up'
          data-aos-delay='100'
          className='text-[#B34B1E] font-heavitas text-[3rem] mt-[0.75rem] leading-[1] max-md:text-[6.4rem] max-md:mt-[2.1rem] max-lg:text-[4.25rem]'
        >
          {overview?.title}
        </h2>
      </div>
      {/* <video playsInline controls src="http://cheers-cms.okhub.tech/wp-content/uploads/2023/09/video2.mp4" className="w-full mt-[5.3rem] md:hidden"></video> */}
      {/* <iframe
        width='375'
        height='210'
        src={video?.video?.url_video || 'https://www.youtube.com/embed/Nj6IqVLoaUg?si=RMqLq4uUSDQRlV-Y'}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
        className='object-cover w-full h-[56rem] mt-[5.3rem] md:hidden'
      ></iframe> */}
      <ReactPlayer
        url={video?.video?.url_video || 'https://youtu.be/Nj6IqVLoaUg?si=0FhW12hycc5Tyzxx'}
        controls
        playsinline
        width='100%'
        height='100%'
        className='item-video-v2  w-full h-[56rem] mt-[5.3rem] md:hidden'
      />
      <div
        data-aos='fade-up'
        data-aos-delay='200'
        className={classes['welcome-description']}
        dangerouslySetInnerHTML={{ __html: overview?.contentTop }}
      ></div>
      <div
        data-aos='fade-up'
        data-aos-delay='210'
        className={classes['welcome-description']}
        dangerouslySetInnerHTML={{ __html: overview?.contentBottom }}
      ></div>
    </section>
  )
}

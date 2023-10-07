import BlogItem from './BlogItem'
import SubTitle from '../global/SubTitle'
import Button from '../global/Button'

function OtherArticle({ dataOtherPost, slug, category }) {
    return (
        <section className='w-full px-[6.25vw] mt-[6.25vw] relative z-30'>
            <SubTitle
                title={'Tips and Reviews'}
                subTitleClass={'hidden'}
            />
            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-[2.5vw] md:gap-y-[3vw] gap-x-[4.27vw] gap-y-[6.4vw] md:mt-[1.5vw] mt-[4.27vw] font-poppins'>
                {dataOtherPost &&
                    dataOtherPost
                        ?.filter((e) => e?.slug !== slug)
                        ?.slice(0, 4)
                        ?.map((item, index) => (
                            <BlogItem
                                params='blog'
                                data={item}
                                key={index}
                            />
                        ))}
            </div>

            <div className='flex justify-center md:mt-[1.5vw] mt-[4.27vw]'>
                <Button
                    href={category === 'blog' ? '/blog' : '/destinations'}
                    content={`view all ${category === 'blog' ? 'blogs' : 'destinations'}`}
                    className={'my-[0.87vw] w-fit h-[3vw] max-md:rounded-[2.133vw] max-md:flex-1 max-md:h-[11.73vw]'}
                />
            </div>
        </section>
    )
}

export default OtherArticle

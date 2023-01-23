import { ArrowUpRight } from 'react-feather';

function Post({ post, tags, index }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12">
      <div className="flex flex-col px-6 pb-6 pt-0 md:p-6 border bg-white border-white border-spacing-4 shadow-lg rounded-tl-xl rounded-tr-xl md:rounded-xl lg:col-span-2">
        <div className='mt-3 mb-4 flex flex-row justify-between items-center md:mt-6 md:mb-8'>
          <h2 className='mt-1 text-3xl font-medium sm:text-slate-900 md:text-3xl dark:sm:text-white'>{post.title}</h2>
          {
            post.link ? <a href={`${post.link}`} target="_blank" className="border border-gray-300 rounded-full p-2"><ArrowUpRight className='text-gray-400' size={16}/></a> : ""
          }
        </div>
        <div className='flex-1 bg-[#efeff0] rounded-lg py-4 px-3 sm:py-6 sm:px-10 '>
          <img className='w-full object-cover object-left-top rounded-lg shadow-[0_25px_15px_-20px_rgba(0,0,0,0.15)]' alt={post.heroImage.fields.description} src={`https:${post.heroImage.fields.file.url}`} />
        </div>
      </div>
      <div className={`relative flex flex-col px-6 pt-0 pb-6 bg-white border border-white border-spacing-4 shadow-lg rounded-bl-xl rounded-br-xl md:rounded-xl md:p-6 ${index % 2 !== 0 ? 'lg:-order-1': ''}`}>
        <div className='mt-2 mb-3 md:mt-6 md:mb-8'>
          <h2 className='mt-1 text-lg font-medium  sm:text-slate-900 md:text-2xl dark:sm:text-white'>Project Overview</h2>
        </div>
        <div className="flex flex-col justify-between bg-[#efeff0] p-6 rounded-lg h-full">
          <h3 className='text-xl font-normal mb-2 text-center'>{post.description}</h3>
          <div className='relative mb-4 before:w-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:bg-gradient-to-r before:from-[#efeff0] after:w-8 after:absolute after:right-0 after:top-0 after:bottom-0 after:bg-gradient-to-l after:from-[#efeff0]'>
            <ul className={`flex flex-row overflow-y-scroll snap-x touch-pan-y py-4 ${!tags && 'hidden'}`}>
              {
                tags?.map(tag => <li className='flex-initial scroll-ml-6 snap-start rounded-3xl px-6 py-2 mx-2 shadow-sm bg-white text-xs font-semibold whitespace-nowrap first:ml-0 first:-scroll-ml-6'>{tag}</li>)
              }
            </ul>
          </div>
          <p className='p-4 flex-1 text-sm rounded-lg bg-white'>{post.body}</p>
          {/* <Link href={`/posts/${post.slug}`}>Read more</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Post
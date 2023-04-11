import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'
import CONFIG_FUKA from '../config_fuka'

const BlogCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview = CONFIG_FUKA.POST_LIST_PREVIEW && post.blockMap
  // matery 主题默认强制显示图片
  if (post && !post.page_cover) {
    post.page_cover = siteInfo?.pageCover
  }

  return (
    <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true"
      className='w-full lg:max-w-lg p-2 h-full overflow-auto'>
      <section className="mb-4 p-2 duration-200">
        <div className="flex flex-col-reverse justify-between duration-300">
          <div className="p-2 flex flex-col w-full">
            <Link
              href={`${BLOG.SUB_PATH}/${post.slug}`}
              passHref
              className={`break-words cursor-pointer font-bold hover:underline text-xl ${showPreview ? 'justify-center' : 'justify-start'}
                leading-tight text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400`}>

              {post.title}

            </Link>

            {(!showPreview || showSummary) && (
              <p className="mt-4 mb-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7 overflow-hidden">
                {post.summary}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>

  )
}

export default BlogCard

import Logo from './Logo'
import GroupCategory from './GroupCategory'
import { MenuList } from './MenuList'
import GroupTag from './GroupTag'
import SearchInput from './SearchInput'
import Catalog from './Catalog'
import { useRouter } from 'next/router'
import DarkModeButton from '@/components/DarkModeButton'

function AsideLeft(props) {
  const { tagOptions, currentTag, categoryOptions, currentCategory, post, slot, siteInfo } = props
  const router = useRouter()
  return <div className='relative dark:bg-hexo-black-gray min-h-screen py-14 border-r-2 border-gray-700 hidden lg:block z-20' >
    <div style={{ width: 260 }}></div>
    <div className='fixed top-0 left-0 px-10 py-14 h-full' style={{ width: 260 }}>
      <Logo {...props} />

      <section className='flex flex-col text-gray-600 my-8'>
        <MenuList {...props} />
      </section>

      <section className='flex flex-col dark:text-gray-300'>
        {siteInfo?.description}
      </section>

      {router.asPath !== '/tag' && <section className='flex flex-col my-8'>
        <GroupTag tags={tagOptions} currentTag={currentTag} />
      </section>}

      {router.asPath !== '/category' && <section className='flex flex-col my-8'>
        <GroupCategory categories={categoryOptions} currentCategory={currentCategory} />
      </section>}

      {/* <section className='flex flex-col'>
  <hr className='w-12 my-8 ' />
  <SiteInfo />
</section> */}

      <section className='flex justify-center dark:text-gray-200'>
        <DarkModeButton />
      </section>

      {/* <section className='sticky top-0 pt-12'>
  <Catalog toc={post?.toc} />
  <div className='flex justify-center'>
    <div>{slot}</div>
  </div>
</section> */}

      <section className='absolute left-2 bottom-2 right-2  flex flex-col text-gray-600'>
        <SearchInput {...props} />
      </section>

    </div>
  </div>
}

export default AsideLeft

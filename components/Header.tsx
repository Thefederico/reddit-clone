import React from 'react'
import Image from 'next/image'
import { MenuIcon, ChevronDownIcon, HomeIcon, SearchIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'


function Header() {
  return (
    <header className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
      <figure className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Image src='https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/2560px-Reddit_logo_new.svg.png' alt='logo' layout='fill' objectFit='contain' />
      </figure>
      <section className='flex items-center mx-7 xl:min-w-[300px]'>
        <HomeIcon className='w-5 h-5'/>
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='w-5 h-5'/>
      </section>
      <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
        <SearchIcon className='w-6 h-6 text-gray-400'/>
        <input type='text' className='flex-1 bg-transparent outline-none' placeholder='Search Reddit'/>
        <button type='submit' hidden />
      </form>
      <section className='text-gray-500 items-center space-x-2 mx-5 hidden lg:inline-flex' >
        <SparklesIcon className='icon' />
        <GlobeIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <SpeakerphoneIcon className='icon' />
      </section>
      <section className='ml-5 items-center lg:hidden'>
        <MenuIcon className='icon'/>
      </section>
      <section className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer'>
        <figure className='relative w-5 h-5 flex-shrink-0'>
          <Image src="https://logoeps.com/wp-content/uploads/2014/09/52053-reddit-logo-icon-vector-icon-vector-eps.png" alt="sign" layout='fill' objectFit='contain' />
        </figure>
        <p className='text-gray-400'>Sign in</p>
      </section>
    </header>
  )
}

export default Header
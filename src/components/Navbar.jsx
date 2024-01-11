export default function Navbar() {
  return (
    <div>

      <nav className='flex justify-between p-4'>
        <div className='items-center text-2xl font-bold tracking-widest text-gray-700 uppercase'>
          folio<span className='text-2xl text-orange-500'>.</span>
        </div>
        <div className='items-center hidden space-x-4 tracking-wide uppercase md:flex'>
          <a className='hover:text-orange-500' href='#'>home</a>
          <a className='hover:text-orange-500' href='#'>about</a>
          <a className='hover:text-orange-500' href='#'>skills</a>
          <a className='hover:text-orange-500' href='#'>blogs</a>
        </div>
        <div className='flex items-center space-x-2'>
          <a href='#'><img src='/icons/instagram.svg' alt='instagram' className='w-8' /></a>
          <a href='https://www.linkedin.com/in/suhaasv7/' target='blank'><img src='/icons/linkedin.svg' alt='linkedin' className='w-8' /></a>
          <a href='https://github.com/suhaasvijay' target='blank'><img src='/icons/github.svg' alt='github' className='w-8' /></a>
        </div>
      </nav>

    </div>
  )
}

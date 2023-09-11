export default function Navbar() {
  return (
    <div>

      <nav className='flex justify-between p-4'>
        <div className='font-bold text-2xl uppercase text-gray-700 tracking-widest items-center'>
          folio<span className='text-orange-500 text-2xl'>.</span>
        </div>
        <div className='flex space-x-4 uppercase tracking-wide items-center'>
          <a className='hover:text-orange-500' href='#'>home</a>
          <a className='hover:text-orange-500' href='#'>about</a>
          <a className='hover:text-orange-500' href='#'>skills</a>
          <a className='hover:text-orange-500' href='#'>blogs</a>
        </div>
        <div className='flex space-x-2 items-center'>
          <a href='#'><img src='/icons/instagram.svg' alt='instagram' className='w-8' /></a>
          <a href='https://www.linkedin.com/in/suhaasv7/' target='blank'><img src='/icons/linkedin.svg' alt='linkedin' className='w-8' /></a>
          <a href='https://github.com/suhaasvijay' target='blank'><img src='/icons/github.svg' alt='github' className='w-8' /></a>
        </div>
      </nav>

    </div>
  )
}

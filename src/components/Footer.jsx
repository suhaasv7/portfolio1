const links = "text-black hover:text-orange-600"

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between max-w-6xl gap-10 px-5 pb-12 mx-auto mt-16 lg:px-20 lg:flex-row">

      <div>
        <p>
          © 2024 Suhaas V. All rights reserved.
        </p>
        <p>
          Made with ❤️ by Suhaas V
        </p>
      </div>

      <a href="https://mail.google.com/mail/u/0/?fs=1&to=suhaasvijay7@gmail.com&tf=cm" target="_blank" className="p-2 text-white bg-orange-500 rounded-md cursor-pointer w-fit h-fit">
        Contact Me
      </a>

      {/* <div className="flex flex-col space-y-1 ">
        <a href="#" className={links}> Home</a>
        <a href="#"> About</a>
        <a href="#"> Skills</a>
        <a href="#"> Blogs</a>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        <a href='#'><img src='/icons/instagram.svg' alt='instagram' className='w-8' /></a>
        <a href='https://www.linkedin.com/in/suhaasv7/' target='blank'><img src='/icons/linkedin.svg' alt='linkedin' className='w-8' /></a>
        <a href='https://github.com/suhaasvijay' target='blank'><img src='/icons/github.svg' alt='github' className='w-8' /></a>
      </div> */}

    </div>
  )
}

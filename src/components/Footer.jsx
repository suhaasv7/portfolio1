const links = "text-black hover:text-orange-600"

export default function Footer() {
  return (
    <div className="flex justify-between mb-10 mt-28 max-w-4xl mx-auto items-center">

      <div>
        <p>
          © 2023 Suhaas Vijay. All rights reserved.
        </p>
        <p>
          Made with ❤️ by Suhaas Vijay
        </p>
      </div>

      <div className="p-2 border-2 border-orange-400 w-fit h-fit cursor-pointer">
        Contact Me
      </div>

      <div className="flex flex-col space-y-1 ">
        <a href="#" className={links}> Home</a>
        <a href="#"> About</a>
        <a href="#"> Skills</a>
        <a href="#"> Blogs</a>
      </div>

      <div className='flex space-y-2 items-center flex-col'>
        <a href='#'><img src='/icons/instagram.svg' alt='instagram' className='w-8' /></a>
        <a href='https://www.linkedin.com/in/suhaasv7/' target='blank'><img src='/icons/linkedin.svg' alt='linkedin' className='w-8' /></a>
        <a href='https://github.com/suhaasvijay' target='blank'><img src='/icons/github.svg' alt='github' className='w-8' /></a>
      </div>

    </div>
  )
}

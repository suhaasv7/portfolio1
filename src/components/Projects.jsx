const links = [
  {
    title: "Portfolio",
    link: "https://portfolio-suhaas.netlify.app/",
    imageUrl: "/website/portfolio.png"
  },
  {
    title: "QR Code Generator",
    link: "https://qr-code-generator07.netlify.app",
    imageUrl: "/website/qrCode.png"
  },
  {
    title: "Super Smoothies",
    link: "https://supa-smoothies1.netlify.app",
    imageUrl: "/website/supaSmoothies.png"
  },
]

export default function Projects() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-[#374151] mt-10 pl-10'>Projects</h1>
      <div className='grid items-center justify-center w-full h-full grid-cols-1 my-10 rounded-md gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
        {links.map(({ title, link, imageUrl }) => (
          <a
            key={title}
            href={link}
            target='_blank'
            className=" w-[350px] h-[150px] mx-auto flex justify-left items-end p-3 text-lg text-white rounded-2xl"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 59%, rgba(0, 0, 0, 1) 100%), url(${imageUrl})`,
              backgroundSize: "cover",
            }}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  )
}

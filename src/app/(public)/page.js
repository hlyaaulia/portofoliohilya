
const ItemService=({
  title,
  subTitle
})=>{

  return (<>
    <div className="w-[310px] bg-white p-5 ">
      <div className="flex justify-center">
        <img src="images/coding.png"/>
      </div>
      <div className="text-center">
        <h3>{title}</h3>
        <span className="text-[15px] text-[#767676]">{subTitle}</span>
      </div>
    </div>
  </>)
}

export default function Dashboard() {
  const myService = [
    {title:'web development', subTitle:'blog, e-commerce'},
    {title:'uI/uX design', subTitle:'Mobile app, website design'},
    {title:'sound design', subTitle:'Voice Over, Beat Making'},
    {title:'game design', subTitle:'Character Design, Props & Objects'},
    {title:'photography', subTitle:'portrait, product photography'},
    {title:'advertising', subTitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  ]

    return (
      <>
        <div className='flex w-full bg-fuchsia-300 rounded-xl shadow-2xl '>
          <div className="flex: 1 1 auto p-10">
            <div className="font-extrabold text-[48px] mt-10">
              <div>I&lsquo;m Karina AESPA </div>
              <div>
                <span className="text-[#FFB400]">leader</span> of aespa 
              </div>
            </div>
            <p className="text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
            <button className="btn-primary mt-5">
              <span className="relative text-sm font-semibold text-white">
                  Here Me
              </span>
            </button>
          </div>
          <div>
            <img class="size-25.5" src="image/karina.jpg" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-[32px] font-bold">Aespa</h2>
          <div className="flex justify-center text-[#767676]">
            <p className="w-1/2	">The K-pop girl group continues to own the music world – fourth mini-album Drama comes out on November 10 – but Karina, Winter, Giselle and Ning Ning are taking on the luxury fashion world too </p>
          </div>
        </div>

        <div className="flex justify-center">
        <iframe class = " "width="560" height="315" src="https://www.youtube.com/embed/nFYwcndNuOY?si=L6oySAM8KDZzDWWj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
      </>
    );
  }
  
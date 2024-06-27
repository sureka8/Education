import React ,{useState,useEffect}from 'react'
import { BiSolidLeftArrowCircle } from "react-icons/bi";
import { BiSolidRightArrowCircle } from "react-icons/bi";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideImages = [
      { id: 1, name: "https://media.istockphoto.com/id/1476976242/photo/graduation-day-a-mortarboard-and-graduation-scroll-on-stack-of-books-with-pencils-color-in-a.webp?b=1&s=170667a&w=0&k=20&c=syztrFCa2aVPP5_Y1IxRue6LE99wD5JWix-y6mHZeTg=" },
      { id: 2, name: "https://www.avanse.com/blogs/images/10feb-blog-2023.jpg" },
      { id: 3, name: "https://www.avanse.com/blogs/images/19.jpg" },
      { id: 4, name: 'https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg' },
    //   { id: 5, name: img5 },
    //   { id: 6, name: img6 },
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
      );
    };
    useEffect(() => {
      const slideInterval = setInterval(nextSlide, 3000);
      return () => clearInterval(slideInterval);
    }, []);
  return (
    <div className='w-[90%] container h-full md:mt-28 mt-24  m-auto relative  overflow-y-hidden overflow-hidden '>
    <div className='transition ease-out duration-40'
    //  style={{
    //     transform: `translateX(-${currentSlide *100 }%)`
    // }}
    >
      <img src={slideImages[currentSlide].name} alt='' className='w-full  h-3/4 object-contain' />
    </div>
    <div className='top-0 absolute flex items-center justify-between h-full w-full text-black px-3 md:px-5 text-2xl'>
      <button onClick={prevSlide}>
        <BiSolidLeftArrowCircle />
      </button>
      <button onClick={nextSlide}>
        <BiSolidRightArrowCircle />
      </button>
    </div>

    <div className='bottom-0 absolute py-4 flex justify-center left-[45%]  gap-3'>
        {slideImages.map((s,i) =>(
            <div key={i} className={`rounded-full h-2 w-2  ${i == currentSlide ? "bg-white": "bg-black"}`}></div>
        ))}
        
    </div>
  </div>
  )
}

export default Slider

import React from 'react'
import Container from './layer/Container'

const Bromo = () => {
  return (
    <>
        <section className='bg-black'>
            <Container className="bg-[url(./Bromo.jpg)] bg-cover bg-no-repeat ">
                <div className=' pt-[559px] px-[194px]  pb-[32.92px] text-center font-Sans'>
                    <h4 className='w-full mx-auto text-[#FBD784] font-bold text-lg uppercase tracking-wide'>
                    Bromo
                    </h4>
                    <h2 className='max-w-[932px] pb-[14px]  text-white font-bold text-[64px] uppercase'>
                    Steady your steps, we will climb together!
                    </h2>
                    <p className='max-w-[893px] pl-[19.5px] pb-[26px] uppercase font-normal text-[15px] text-white  leading-8'>
                    Enjoying the vast expanse of the sea of sand, witnessing the splendor of Mount Semeru that soars into the sky, and gazing at the beauty of the sun moving out of its bed or otherwise enjoying the dim twilight from the Bromo ridge is an unforgettable experience when visiting Bromo. 
                    </p>
                    <a className='text-[#FBD784] text-lg uppercase font-bold ' href="#">
                    read more
                    </a>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Bromo
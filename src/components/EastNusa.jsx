import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'

const EastNusa = () => {
  return (
    <>
        <section className="bg-black">
            <Container className="flex pt-80  pb-[357px]" >
                <div className="left w-1/2  bg-cover">
                    <Image src="/About.jpg"alt="About.jpg"/>
                </div>
                <div className="right w-1/2 pt-[45px] pb-[105px] pl-[23px] text-white font-Sans">
                    <h4 className="pb-[13px] text-[#FBD784]  text-lg font-bold tracking-wide uppercase">
                        EAST nUSA TENGGARA
                    </h4>
                    <h2 className='max-w-[496px] font-bold text-[64px] uppercase'>
                        Have you enjoyed your holiday?
                    </h2>
                    <p className='max-w-[587px] pt-[13px] pb-[66px] text-sm font-semibold uppercase leading-8'>
                        You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet many travelers from other countries.
                    </p>
                    <a className='text-[#FBD784] font-bold uppercase text-lg' href="#">read more</a>
                </div>
            </Container>
        </section>
    </>
  )
}

export default EastNusa
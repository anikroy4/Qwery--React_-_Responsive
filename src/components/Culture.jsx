import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'

const Culture = () => {
  return (
    <>
        <section className='bg-black'>
            <Container className='flex pt-[295.08px] pb-[200px]  text-white justify-between'>
                <div className="left w-1/2  font-Sans">
                    <h4 className='pt-[153px] ml-[6px]  text-[#FBD784] font-normal text-lg tracking-wide'>
                    INDONESIAN CULTURE
                    </h4>
                    <h2 className='py-[19px] w-full text-[64px] font-bold uppercase '>
                    Our culture here is very friendly to people
                    </h2>
                    <p className='w-full pb-[47px] uppercase text-[18px] leading-8 font-normal'>
                    known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.
                    </p>
                    <a className='text-[#FBD784] uppercase font-bold text-[18px] ' href="#">
                    read more
                    </a>
                </div>
                <div className="right w-1/2 pl-[45px]">
                <Image src="/Culture.jpg" alt="Culture.jpg" />
                </div>
            </Container>
        </section>
    </>
  )
}

export default Culture
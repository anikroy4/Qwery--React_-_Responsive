import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import List from './layer/List'
import ListItem from './layer/ListItem'

const Navbar = () => {
  return (
    <>
        <nav className="absolute w-full top-7">
            <Container className= "flex items-center justify-between" >
                <div className='logo'>
                    <Image src="/logo.png" alt="/logo.png"/>
                </div>

                <div className="menu">
                    <List className="gap-x-[60px]">
                        <ListItem className="text-black font-Sans text-lg font-semibold " liclassName="" ListInnerItem="Home"/>
                        <ListItem className="text-white font-Sans text-lg font-semibold hover:text-black" liclassName="" ListInnerItem="About us"/>
                        <ListItem className="text-white font-Sans text-lg font-semibold hover:text-black" liclassName="" ListInnerItem="Information"/>
                        <ListItem className="text-white font-Sans text-lg font-semibold hover:text-black" liclassName="" ListInnerItem="Contact Us"/>
                        <ListItem className="text-white font-Sans text-lg font-semibold hover:text-black" liclassName="" ListInnerItem="Culture"/>
                        <ListItem className="text-white font-Sans text-lg font-semibold hover:text-black" liclassName="" ListInnerItem="Contact Us"/>
                    </List>
                </div>
            </Container>
            
        </nav>


        <section className='bg-[url(/banner.jpg)] bg-cover bg-no-repeat bg-center pt-[462px] pb-[462px] pl-[300px]'>

        <Container>
            <h4 className='text-lg text-[#FFC178] '>explore the Nature Beauty</h4>
            <h2 className='font-normal text-[88px] max-w-[817px] text-[#fff]'><span className='font-bold text-8xl'>Discover</span> Wonderful Indonesia</h2>   
        </Container>
        </section>
    </>
  )
}

export default Navbar
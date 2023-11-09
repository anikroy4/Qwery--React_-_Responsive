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
                        <ListItem liclassName="" ListInnerItem="Home"/>
                        <ListItem liclassName="" ListInnerItem="About us"/>
                        <ListItem liclassName="" ListInnerItem="Information"/>
                        <ListItem liclassName="" ListInnerItem="Culture"/>
                        <ListItem liclassName="" ListInnerItem="Contact Us"/>
                    </List>
                </div>
            </Container>
            
        </nav>


        <section className='bg-[url(/banner.jpg)] bg-cover bg-no-repeat bg-center pt-[462px] pb-[462px] pl-[300px]'>

        <Container>
            <h4>explore the Nature Beauty</h4>
            <h2>Discover <span className='hdesign'>Wonderful Indonesia</span></h2> 
        </Container>
        </section>
    </>
  )
}

export default Navbar
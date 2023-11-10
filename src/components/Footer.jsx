import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import List from './layer/List'
import ListItem from './layer/ListItem'

const Footer = () => {
  return (
    <>
    <footer className='bg-black'>
        <Container className="flex text-white font-Sans">
            <div className="left w-1/2">
                <Image className="pb-[82px]" src='/Footer_logo.png' alt="Footer_logo.png"/>
                <h2 className='w-[405px] pb-[49px] text-[36px] capitalize font-bold tracking-tight'>
                Let's go on vacation, Make your day
                </h2>
                <p className='text-[15px] font-normal tracking-tighter  '>
                Terms & Conditions
                </p>

                <div className="icon pt-9 pb-[153.87px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="117" height="17" viewBox="0 0 117 17" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M101.689 0.27533H109.717C113.411 0.27533 116.406 2.4946 116.406 5.23127V11.1784C116.406 13.9151 113.411 16.1343 109.717 16.1343H101.689C97.9955 16.1343 95 13.9151 95 11.1784V5.23127C95 2.4946 97.9955 0.27533 101.689 0.27533ZM109.717 14.6477C112.299 14.6477 114.399 13.0915 114.399 11.1785V5.2314C114.399 3.31841 112.299 1.76224 109.717 1.76224H101.689C99.1072 1.76224 97.0067 3.31841 97.0067 5.2314V11.1785C97.0067 13.0915 99.1072 14.6477 101.689 14.6477H109.717Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M100.352 8.20489C100.352 6.01536 102.748 4.24014 105.703 4.24014C108.659 4.24014 111.055 6.01536 111.055 8.20489C111.055 10.3944 108.659 12.1696 105.703 12.1696C102.748 12.1696 100.352 10.3944 100.352 8.20489ZM102.358 8.20493C102.358 9.57079 103.859 10.6829 105.703 10.6829C107.547 10.6829 109.048 9.57079 109.048 8.20493C109.048 6.83808 107.547 5.72696 105.703 5.72696C103.859 5.72696 102.358 6.83808 102.358 8.20493Z" fill="white"/>
                <ellipse cx="111.456" cy="3.9427" rx="0.713146" ry="0.528303" fill="white"/>
                <path d="M66 2.44543C65.1075 2.74119 64.1565 2.93724 63.165 3.03242C64.185 2.57235 64.9635 1.84937 65.3295 0.977946C64.3785 1.40629 63.3285 1.70885 62.2095 1.8777C61.3065 1.15132 60.0195 0.701447 58.6155 0.701447C55.8915 0.701447 53.6985 2.37177 53.6985 4.41945C53.6985 4.71408 53.7315 4.99738 53.8125 5.26708C49.722 5.11637 46.1025 3.63528 43.671 1.3791C43.2465 1.93549 42.9975 2.57235 42.9975 3.25793C42.9975 4.54524 43.875 5.68636 45.183 6.34701C44.3925 6.33568 43.617 6.1623 42.96 5.8892C42.96 5.90054 42.96 5.91527 42.96 5.93C42.96 7.73631 44.6655 9.23665 46.902 9.58228C46.5015 9.665 46.065 9.70466 45.612 9.70466C45.297 9.70466 44.979 9.69106 44.6805 9.6412C45.318 11.1132 47.127 12.1954 49.278 12.2305C47.604 13.2198 45.4785 13.8159 43.1775 13.8159C42.774 13.8159 42.387 13.8023 42 13.7649C44.1795 14.8267 46.7625 15.433 49.548 15.433C58.602 15.433 63.552 9.76699 63.552 4.85573C63.552 4.69142 63.5445 4.53277 63.534 4.37526C64.5105 3.85172 65.331 3.19787 66 2.44543Z" fill="white"/>
                <path d="M10.6266 2.56252H13V0.108674C12.5905 0.0752359 11.1823 0 9.54229 0C6.12032 0 3.77619 1.27772 3.77619 3.62611V5.78738H0V8.53059H3.77619V15.433H8.40597V8.53124H12.0294L12.6046 5.78802H8.40488V3.89812C8.40597 3.10525 8.7656 2.56252 10.6266 2.56252Z" fill="white"/>
                </svg>
                </div>
                
            </div>
            <div className="right w-1/2">
                <div className="top flex justify-end gap-[16px] ">
                    <p className='pt-3 pb-[17px] text-[22px]'>
                        Ready to explore?
                    </p>
                    <button className='bg-[#FFA343] text-black text-[17px] font-bold capitalize py-[19px] px-[67px] rounded-[10px]'>
                        Get started
                    </button>
                </div>
                <div className='bottom flex gap-[84px] justify-end pt-16 '>
                   <div>
                    <h3 className='font-bold'>
                        Services
                    </h3>
                    <List className="flex-col">
                        <ListItem ListInnerItem="Email Marketing"/>
                        <ListItem ListInnerItem="Campaigns"/>
                        <ListItem ListInnerItem="Branding"/>
                        <ListItem ListInnerItem="Offline"/>
                    </List>
                   </div>
                   <div>
                    <h3>
                        About
                    </h3>
                    <List className="flex-col">
                        <ListItem ListInnerItem="Our Story"/>
                        <ListItem ListInnerItem="Benefits"/>
                        <ListItem ListInnerItem="Term"/>
                        <ListItem ListInnerItem="Career"/>
                    </List>
                   </div>
                   <div>
                    <h3>
                        Help
                    </h3>
                    <List className="flex-col">
                        <ListItem ListInnerItem="FAQ’S"/>
                        <ListItem ListInnerItem="Contact us"/>
                    </List>
                   </div>

                </div>
            </div>
        </Container>

    </footer>
    </>
  )
}

export default Footer
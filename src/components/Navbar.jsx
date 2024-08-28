import img from "../assets/ripmex-logo.png"
import img2 from "../assets/asset 8.svg"
const Navbar = () => {
    return (
        <div className="w-full flex flex-col py-8 items-center justify-center gap-4 ">
            <div className="flex w-full  items-center justify-between">
                <img className="w-32 md:w-40 object-contain" src={img} alt="" />
                <div className="lg:flex items-center hidden  gap-4 justify-around">
                    <a className='font-spaceGrotesk text-lg' href="">
                        How to buy
                    </a>
                    <a className='font-spaceGrotesk text-lg' href="">

                        Roadmap
                    </a>
                    <a className='font-spaceGrotesk text-lg' href="">

                        Tokenomics
                    </a>
                    <a className='font-spaceGrotesk text-lg' href="">

                        Team
                    </a>
                    <a className='font-spaceGrotesk text-[#01c5fa] text-lg animate-pulse duration-1000' href="">

                        GIVEAWAY
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <button className="hidden items-center gap-2 rounded-full border border-white/10 bg-transparent py-4 px-4 font-semibold lg:flex">
                        <img className="h-4 w-4" src={img2} />
                        BNB Smart Chain
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path></svg>
                    </button>
                    <button className="flex  bg-button-gradient-dark border border-[#2252fd] items-center h-[45px] text-white font-openSans gap-2 rounded-full bg-primary py-2 px-4 text-sm font-semibold text-black transition-opacity duration-200 hover:opacity-75 lg:py-4 lg:text-base">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M6.66675 10.2799H12.0001" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path><path d="M26.6667 20V24C26.6667 24.7073 26.3856 25.3856 25.8855 25.8857C25.3854 26.3858 24.7073 26.6667 24.0001 26.6667H5.33341C4.62617 26.6667 3.94777 26.3858 3.44767 25.8857C2.94758 25.3856 2.66675 24.7073 2.66675 24V8.00001C2.66675 7.29277 2.94758 6.61453 3.44767 6.11443C3.94777 5.61433 4.62617 5.33334 5.33341 5.33334H24.0001C24.7073 5.33334 25.3854 5.61433 25.8855 6.11443C26.3856 6.61453 26.6667 7.29277 26.6667 8.00001V12" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10"></path><path d="M27.9998 11.9998H24.2931C23.2416 11.9789 22.2212 12.3585 21.439 13.0616C20.6567 13.7646 20.171 14.7387 20.0799 15.7865C20.0509 16.3295 20.1328 16.8727 20.3208 17.3829C20.5088 17.8931 20.799 18.3595 21.1733 18.7539C21.5477 19.1482 21.9985 19.4621 22.4982 19.6763C22.998 19.8905 23.5362 20.0006 24.0799 19.9998H28.0799C28.4335 19.9998 28.7726 19.8594 29.0226 19.6093C29.2727 19.3593 29.4133 19.0201 29.4133 18.6665V13.3331C29.4136 13.1511 29.3765 12.971 29.3045 12.8038C29.2326 12.6365 29.127 12.4858 28.9946 12.3609C28.8622 12.236 28.7058 12.1395 28.5347 12.0774C28.3636 12.0153 28.1815 11.9889 27.9998 11.9998V11.9998Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"></path></svg>

                        Connect Wallet
                    </button>
                </div>
            </div>

            <hr className="hr bg-gradient-to-r from-white/0 to-white/20" />
        </div>
    )
}

export default Navbar

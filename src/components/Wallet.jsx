import WalletIcon from '../assets/asset 5.svg'
import WalletIco from '../assets/asset 6.svg'
const Wallet = () => {
    return (

        <section className="py-12 flex items-center justify-center font-openSans self-center font-normal w-full lg:py-24">
            <div className="container flex flex-col items-center justify-center  gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">

                {/* First Column */}
                <div className="flex w-full flex-col gap-4 lg:w-1/2" style={{ opacity: 1, transform: 'none' }}>
                    <div className="relative border-l-[#01c5fa] border-l-[6px]  mx-auto w-full max-w-lg rounded-3xl bg-[#1a2025]/70 backdrop-blur-xl">
                        <div className="absolute -top-8 ">
                            <p className="mx-10 rounded-2xl border border-[#2252fd] bg-button-gradient-light bg-gradient-to-t from-black/20 to-transparent py-2 px-2 text-center text-base backdrop-blur-3xl">
                                DIRECT&nbsp;<span className="font-normal text-[#01c5fa]">RPX&nbsp;</span>BUY
                            </p>
                        </div>
                        <form className="mb-6 flex flex-col gap-4 px-5 pt-12 ">
                            <div className="py-2 flex justify-center items-center">
                                <img width="90" height="90" src="https://ripmex.com/images/qrRPX.png" alt="QR RPX Presale" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-end justify-center">
                                    <span id="copyText">0x58f1f5A89D5f41269a445539137d46aCAE3Ca335</span>
                                </div>
                            </div>
                            <div className="-mx-5 h-0.5 bg-[#30353A]"></div>
                            <span className="text12 text-[#01c5fa] text-center font-medium uppercase ">
                                Send BNB direct to presale address and you will receive RPX tokens immediatly.
                            </span>
                            <button className="mx-auto bg-button-gradient-dark text-white border border-[#2252fd] flex justify-center items-center gap-3 rounded-full bg-primary py-4 px-6 font-normal text-black transition-opacity duration-200 hover:opacity-75 lg:mx-0 heightt">
                                <svg width="" height="" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path fillRule="evenodd" clipRule="evenodd" d="M4.2 4.2v-2.8c0-0.77 0.63-1.4 1.4-1.4h7c0.773 0 1.4 0.627 1.4 1.4v0 7c0 0.773-0.627 1.4-1.4 1.4v0h-2.8v2.8c0 0.773-0.627 1.4-1.4 1.4v0h-7c-0.773 0-1.4-0.627-1.4-1.4v0-7c0-0.77 0.63-1.4 1.4-1.4h2.8zM5.6 4.2h2.8c0.773 0 1.4 0.627 1.4 1.4v0 2.8h2.8v-7h-7v2.8zM1.4 5.6v7h7v-7h-7z" strokeWidth="2" strokeMiterlimit="10" fill="currentColor"></path></svg>
                                Copy Presale Contract
                            </button>
                        </form>
                    </div>
                </div>

                {/* Second Column */}
                <div className="relative flex w-full justify-center lg:w-1/2" style={{ opacity: 1, transform: 'none' }}>
                    <div className="relative border-l-[6px]   border-l-[#01a0fa] mx-auto w-full max-w-lg rounded-3xl bg-[#1a2025]/70 backdrop-blur-xl">
                        <div className="absolute -top-8 ">
                            <p className="mx-10 flex px-2 text-base rounded-2xl border border-[#2252fd] bg-button-gradient-light border-white/10 bg-gradient-to-t from-black/20 to-transparent py-1 text-center items-center backdrop-blur-3xl">
                                BUY&nbsp;<span className="font-normal text-[#01c5fa]">RPX&nbsp;</span> PRESALE LIVE!
                                <img alt="File:Red circle.gif" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436" width="32" height="32" />
                            </p>
                        </div>
                        <form className="mb-6 flex flex-col gap-3 px-5 pt-16">
                            <div className="flex gap-4 rounded-xl border-2 border-transparent  bg-[#000]/50 py-2.5 pr-2.5 pl-6 ring-4 ring-transparent focus-within:border-primary/50 focus-within:ring-primary/20">
                                <div className="flex flex-1 flex-col gap-1">
                                    <label className="text-sm">You send</label>
                                    <input className="w-full bg-transparent text-xl outline-none" type="number" step="0.0001" placeholder="0.0" />
                                </div>
                                <button type="button" className="flex items-center gap-2 rounded-xl bg-[#2F3B4F] py-2.5 px-4 transition-opacity duration-200 hover:opacity-75">
                                    <img src="https://sale.ripmex.com/img/tokens/bnb.webp" alt="BNB" className="h-7 w-7 object-contain" />
                                    <span>BNB</span>
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#232c3a]/50 text-3xl font-bold">=</span>
                                <span className="text-white/50">1 USDT = 10 RPX</span>
                                <span className="text-white/50">
                                    <span className="text-[#01c5fa]">Listing Price = $2.15</span>
                                </span>
                            </div>
                            <div className="flex gap-4 rounded-xl border-2 border-transparent bg-[#000]/50 py-2.5 pr-2.5 pl-6 ring-4 ring-transparent focus-within:border-primary/50 focus-within:ring-primary/20">
                                <div className="flex flex-1 flex-col gap-1">
                                    <label className="text-sm">You get</label>
                                    <input type="number" className="w-full bg-transparent text-xl outline-none" placeholder="0.0" step="0.0001" />
                                </div>
                                <button type="button" className="flex items-center gap-2 rounded-xl bg-[#2F3B4F] py-2.5 px-4 transition-opacity duration-200 hover:opacity-75" disabled>
                                    <img src="https://ripmex.com/images/ripmex.png" alt="RPX" className="h-7 w-7 object-contain" />
                                    <span>RPX</span>
                                </button>
                            </div>
                            <div className="-mx-5 h-0.5 bg-[#30353A]"></div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-end justify-between">
                                    <span>
                                        <span className="text-xl">$1,406,484.37/</span>$3,900,000
                                    </span>
                                    <span>36.06%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '36.06%' }}></div>
                                </div>
                            </div>
                            <p className="text-center text-sm font-medium uppercase text-[#D1D3FF]">Connect your wallet to buy RPX</p>
                            <div className="-mx-5 h-[2px] bg-[#30353A]"></div>
                            <button className="relative bg-button-gradient-dark border border-[#2252fd] flex w-full animate-pulse items-center justify-center gap-2 rounded-full  bg-primary py-4 px-6 text-lg font-normal text-secondary transition-opacity duration-200 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-80 lg:text-xl" type="button">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M6.66675 10.2799H12.0001" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path><path d="M26.6667 20V24C26.6667 24.7073 26.3856 25.3856 25.8855 25.8857C25.3854 26.3858 24.7073 26.6667 24.0001 26.6667H5.33341C4.62617 26.6667 3.94777 26.3858 3.44767 25.8857C2.94758 25.3856 2.66675 24.7073 2.66675 24V8.00001C2.66675 7.29277 2.94758 6.61453 3.44767 6.11443C3.94777 5.61433 4.62617 5.33334 5.33341 5.33334H24.0001C24.7073 5.33334 25.3854 5.61433 25.8855 6.11443C26.3856 6.61453 26.6667 7.29277 26.6667 8.00001V12" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10"></path><path d="M27.9998 11.9998H24.2931C23.2416 11.9789 22.2212 12.3585 21.439 13.0616C20.6567 13.7646 20.171 14.7387 20.0799 15.7865C20.0509 16.3295 20.1328 16.8727 20.3208 17.3829C20.5088 17.8931 20.799 18.3595 21.1733 18.7539C21.5477 19.1482 21.9985 19.4621 22.4982 19.6763C22.998 19.8905 23.5362 20.0006 24.0799 19.9998H28.0799C28.4335 19.9998 28.7726 19.8594 29.0226 19.6093C29.2727 19.3593 29.4133 19.0201 29.4133 18.6665V13.3331C29.4136 13.1511 29.3765 12.971 29.3045 12.8038C29.2326 12.6365 29.127 12.4858 28.9946 12.3609C28.8622 12.236 28.7058 12.1395 28.5347 12.0774C28.3636 12.0153 28.1815 11.9889 27.9998 11.9998V11.9998Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"></path></svg>
                                Connect your wallet
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>




    )
}

export default Wallet

import buttonImg from "../assets/asset 12.svg"
import buttonImg2 from "../assets/asset 4.svg"
const Usage = () => {
    return (
        <div className='py-12 container flex items-center justify-center w-full lg:py-24 .container flex flex-col items-center gap-6 px-4 lg:flex-row lg:gap-16 lg:px-0'>
            <div className="flex w-full flex-col gap-6  lg:w-1/2">
                <button className="mx-auto font-light  h-[45px] p-4 bg-button-gradient-dark border border-[#2252fd] w-auto  text-white justify-center font-openSans flex items-center gap-3 rounded-full bg-primary   transition-opacity duration-200 hover:opacity-75 lg:mx-0 ">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path fillRule="evenodd" clipRule="evenodd" d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" strokeWidth="2" strokeMiterlimit="10" fill="currentColor"></path></svg>
                    Add Rpx to your Wallet
                </button>
                <button className="mx-auto h-[45px] p-4 bg-button-gradient-light w-auto border border-[#2252fd]  text-white justify-center font-openSans flex items-center gap-2 rounded-full bg-primary  font-semibold  transition-opacity duration-200 hover:opacity-75 lg:mx-0 ">
                    <svg width="" height="" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path fillRule="evenodd" clipRule="evenodd" d="M4.2 4.2v-2.8c0-0.77 0.63-1.4 1.4-1.4h7c0.773 0 1.4 0.627 1.4 1.4v0 7c0 0.773-0.627 1.4-1.4 1.4v0h-2.8v2.8c0 0.773-0.627 1.4-1.4 1.4v0h-7c-0.773 0-1.4-0.627-1.4-1.4v0-7c0-0.77 0.63-1.4 1.4-1.4h2.8zM5.6 4.2h2.8c0.773 0 1.4 0.627 1.4 1.4v0 2.8h2.8v-7h-7v2.8zM1.4 5.6v7h7v-7h-7z" strokeWidth="2" strokeMiterlimit="10" fill="currentColor"></path></svg>

                    Copy Token Address to Add Manually
                </button>

                <div className="gradient-border border-l-[6px] border-l-[#01c5fa] flex text-center w-full flex-col py-8 lg:flex-row items-center gap-4 rounded-2xl bg-[#1A2025]/70 p-6 backdrop-blur-xl transition-all duration-200 hover:scale-105 ">
                    <div className="gradient-border flex text-center p-6 border border-white/40 rounded-full w-auto  items-center justify-center text-3xl font-bold before:rounded-full lg:h-20 lg:w-20">
                        1.
                    </div>
                    <div className="flex-col items-start text-center lg:text-start gap-2">
                        <h2 className={"font-spaceGrotesk text-2xl text-[#01c5fa] "}>Connect to wallet</h2>
                        <p>Connect with your preferable crypto wallet, we offer options: MetaMask, Wallet Connect with more than 170+ wallets available!</p>
                    </div>
                </div>
                <div className="gradient-border border-l-[6px] border-l-[#01c5fa] flex text-center w-full flex-col py-8 lg:flex-row items-center gap-4 rounded-2xl bg-[#1A2025]/70 p-6 backdrop-blur-xl transition-all duration-200 hover:scale-105 ">
                    <div className="gradient-border flex text-center p-6 border border-white/40 rounded-full w-auto  items-center justify-center text-3xl font-bold before:rounded-full lg:h-20 lg:w-20">
                        2.
                    </div>
                    <div className="flex-col items-start text-center lg:text-start gap-2">
                        <h2 className={"font-spaceGrotesk text-2xl text-[#01c5fa] "}>Choose payable token & chain</h2>
                        <p>You can participate on RPX pre-sale from Binance Smart Chain by using tokens like: BNB, USDT, USDC, BUSD and more.</p>
                    </div>
                </div>
                <div className="gradient-border border-l-[6px] border-l-[#01c5fa] flex text-center w-full flex-col py-8 lg:flex-row items-center gap-4 rounded-2xl bg-[#1A2025]/70 p-6 backdrop-blur-xl transition-all duration-200 hover:scale-105 ">
                    <div className="gradient-border flex text-center p-6 border border-white/40 rounded-full w-auto  items-center justify-center text-3xl font-bold before:rounded-full lg:h-20 lg:w-20">
                        3.
                    </div>
                    <div className="flex-col items-start text-center lg:text-start gap-2">
                        <h2 className={"font-spaceGrotesk text-2xl text-[#01c5fa] "}>Receive tokens</h2>
                        <p>RPX tokens are instantly delivered to your wallet after purchase. We do not impose any locks.</p>
                    </div>
                </div>
            </div>
            <div className='flex lg:w-1/2 gap-6  flex-col items-center lg:items-start text-center lg:text-start justify-center'>
                <h3 className='font-spaceGrotesk text-[#01c5fa] mb-4 text-center text-5xl leading-normal lg:text-left'>How to Buy</h3>
                <div className="flex lg:pr-24 flex-col gap-3">
                    <p className="font-openSans">
                        Refer a friend and you will receive a 8% USDT from their investment! In order to receive your bonus, your friend needs to purchase tokens worth of at least $10.
                    </p>
                    <p className="font-openSans">
                        Your bonus will be sent to you within 24 hours, to your crypto wallet that is related with your referral link.
                    </p>
                </div>
                <button className=" bg-button-gradient-dark border border-[#2252fd]  mx-auto flex items-center gap-3 rounded-full bg-primary py-4 px-6 font-semibold text-white font-openSans transition-opacity duration-200 hover:opacity-75 lg:mx-0">
                    Buy with Card
                </button>
                <div className="mx-auto flex items-center gap-3 rounded-full py-4 font-semibold text-black transition-opacity duration-200 hover:opacity-75 lg:mx-0 st-current">
                    <img src="https://ripmex.com/images/Telegram.png" className="w-8 object-contain" />
                    <img src="https://ripmex.com/images/twitter.png" className="w-8 object-contain" />
                    <img src="https://ripmex.com/images/youtube.png" className="w-8 object-contain" />
                    <img src="https://ripmex.com/images/Gitbook.png" className="w-8 object-contain" />
                </div>
            </div>
        </div>
    )
}

export default Usage

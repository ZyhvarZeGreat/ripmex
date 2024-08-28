
// import image from '../assets/ripmex-logo.png'
const Footer = () => {
    return (
        <footer className="bg-[#14181C]/60 items-center flex flex-col justify-center w-full">
            <div className="h-px bg-gradient-to-r w-full from-white/20 to-white/0"></div>
            <div className="container w-full max-w-screen-xl ">

                <div className=" px-4 pt-12 lg:px-0">
                    <div className="mb-6 grid grid-cols-1 gap-8 lg:mb-12 lg:grid-cols-3 lg:gap-32">
                        <div className="order-last flex flex-col items-center gap-8 text-center lg:order-first lg:items-start lg:text-left">
                            <a href="https://ripmex.com/">
                                <img
                                    src="https://ripmex.com/images/logo.png"
                                    alt="logos"
                                    className="w-32 md:w-40 object-contain"
                                />
                            </a>
                            <p className="text-[#3D3F4F] lg:text-lg">
                                Real Time gross Payment system Commission-Free Currency Exchange
                                Network
                            </p>
                            <div className="h-px w-full bg-white/10"></div>
                            <div className="flex items-center gap-8 text-[#3D3F4F]"></div>
                        </div>
                        <div className="fot col-span-1 grid grid-cols-1 gap-2 text-center lg:col-span-2 lg:grid-cols-3 lg:text-left">
                            <div>
                                <h6 className="mb-4 text-xl lg:text-2xl font-spaceGrotesk">RPX</h6>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <a
                                            href="https://ripmex.com"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://docs.ripmex.com/"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Whitepaper
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://ripmex.com/giveaway"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Giveaway
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://docs.ripmex.com/usdrpx-security/audits"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Audits
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="mb-4 text-xl font-spaceGrotesk lg:text-2xl">Social Links</h6>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <a
                                            href="https://t.me/Ripmex"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Telegram Channel (EN)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://t.me/RipmexOfficial"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Telegram Group (EN)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/RipmexOfficial"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://medium.com/@Ripmex"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Medium
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="mb-4 font-spaceGrotesk text-xl lg:text-2xl">Useful Links</h6>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <a
                                            href="https://sale.ripmex.com"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Buy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:team@ripmex.com"
                                            target="_blank"
                                            className="text-sm text-white transition-all duration-300 hover:opacity-75 lg:text-base"
                                            rel="noopener noreferrer"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-px bg-white/10"></div>
                    <div className="flex flex-wrap items-center justify-center gap-4 py-6 lg:justify-between">
                        <span className="text-white/50">
                            Copyright ©2024 Ripmex. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer

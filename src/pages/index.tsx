import { Inter } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  return (
    <main className='main-background'>
      {/* Header Start */}
      <section className='relative'>
        <div className='wrapper relative z-10 text-black'>
          <nav className="bg-transparent">
            <div className="lg:flex flex-wrap items-center justify-between mx-auto p-4">
              <div className='flex justify-between items-center'>
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src='/logo-lion.png' className="lg:w-3/4 logo_" alt="Flowbite Logo" />
                </a>
                <div className='flex gap-8 items-center'>
                  <button className='btn-connect lg:hidden md:block text-sm p-3 px-4 rounded-2xl font-bold'>Connect</button>
                  <div onClick={() => setMenu(menu == true ? false : true)} className='lg:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
                      <path opacity="0.5" d="M1 1H12.2M23.4 1H17.8M1 8H23.4M1 15H6.6M23.4 15H12.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`flex items-center xl:gap-20 lg:gap-10 gap-4 nav-ul-parent lg:mt-0 mt-4 ${menu == true ? '' : 'hide_'}`}>
                <div className="w-full md:block md:w-auto" id="navbar-default">
                  <ul className="flex lg:gap-20 gap-5 text-black">
                    <li>
                      <a href="#opensea" className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-black" aria-current="page">Home</a>
                    </li>
                    <li>
                      <a href="#faq" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Services</a>
                    </li>
                    <li>
                      <a href="#roadmap" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Roadmap</a>
                    </li>
                    <li>
                      <a href="#faq" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Company</a>
                    </li>
                  </ul>
                </div>
                <div className='flex gap-5 items-center'>
                  <a href="https://discord.gg/6MXmgbPxav" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
                      <path d="M18.636 1.22836C17.1933 0.646982 15.6669 0.233889 14.0973 0C13.9018 0.304407 13.6734 0.713835 13.5159 1.03956C11.8236 0.820411 10.1469 0.820411 8.48572 1.03956C8.32828 0.713909 8.0947 0.304407 7.89739 0C6.32628 0.233997 4.79862 0.648142 3.35516 1.23139C0.482791 4.96961 -0.295889 8.61487 0.093408 12.2085C1.99856 13.4338 3.84484 14.1781 5.66001 14.6652C6.11112 14.1309 6.5099 13.5653 6.85222 12.9741C6.20049 12.7604 5.5722 12.4971 4.97483 12.1872C5.13203 12.0869 5.28554 11.9823 5.43511 11.8736C9.05497 13.3318 12.9882 13.3318 16.5649 11.8736C16.7151 11.9816 16.8685 12.0861 17.0251 12.1872C16.4267 12.4979 15.7973 12.7618 15.1442 12.9757C15.4885 13.5692 15.8866 14.1354 16.3364 14.6667C18.1533 14.1797 20.0013 13.4353 21.9065 12.2085C22.3633 8.04262 21.1262 4.43074 18.636 1.22828V1.22836ZM7.34541 9.9985C6.25873 9.9985 5.36756 9.1248 5.36756 8.0609C5.36756 6.99699 6.23974 6.12181 7.34541 6.12181C8.45117 6.12181 9.34226 6.99544 9.32326 8.0609C9.32498 9.1248 8.45117 9.9985 7.34541 9.9985ZM14.6545 9.9985C13.5678 9.9985 12.6767 9.1248 12.6767 8.0609C12.6767 6.99699 13.5488 6.12181 14.6545 6.12181C15.7602 6.12181 16.6513 6.99544 16.6323 8.0609C16.6323 9.1248 15.7602 9.9985 14.6545 9.9985Z" fill="#287AFB" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/Swisscheese_fn" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path d="M5.6367 15.9938C7.2786 16.0433 8.91487 15.7959 10.4488 15.2662C11.9827 14.7366 13.3831 13.9355 14.5673 12.9102C15.7515 11.8849 16.6955 10.6563 17.3434 9.29698C17.9913 7.93763 18.3299 6.47513 18.3394 4.99591C19.0919 4.15749 19.6506 3.19209 19.9828 2.15646C20.0076 2.07463 20.0056 1.9881 19.977 1.90728C19.9485 1.82646 19.8946 1.75479 19.8218 1.70091C19.7491 1.64703 19.6606 1.61323 19.567 1.60359C19.4734 1.59395 19.3787 1.60887 19.2943 1.64656C18.9007 1.81718 18.4575 1.87229 18.0272 1.80413C17.5969 1.73597 17.2013 1.54798 16.8959 1.26663C16.5061 0.88228 16.0346 0.572291 15.5093 0.35503C14.984 0.137768 14.4157 0.0176537 13.8379 0.00180381C13.2601 -0.0140461 12.6847 0.074691 12.1457 0.262757C11.6067 0.450823 11.1151 0.734391 10.7 1.09666C10.1317 1.59222 9.71547 2.21174 9.49172 2.89499C9.26796 3.57825 9.24432 4.302 9.42308 4.99591C5.70332 5.19588 3.14945 3.60618 1.10636 1.4266C1.04498 1.36401 0.964688 1.31887 0.875291 1.29669C0.785893 1.27451 0.691257 1.27625 0.60294 1.3017C0.514622 1.32715 0.436445 1.3752 0.377956 1.43999C0.319467 1.50478 0.283196 1.58351 0.273574 1.66655C-0.115647 3.6106 0.165123 5.61534 1.07817 7.41152C1.99122 9.2077 3.49283 10.7093 5.38131 11.7146C4.11508 13.0222 2.33689 13.8389 0.417923 13.9942C0.315116 14.0095 0.220211 14.0535 0.146493 14.1198C0.0727744 14.1861 0.0239313 14.2715 0.00679901 14.3641C-0.0103333 14.4566 0.00510294 14.5517 0.0509472 14.636C0.0967915 14.7202 0.170749 14.7895 0.26247 14.834C1.93194 15.5853 3.77041 15.982 5.6367 15.9938Z" fill="#287AFB" />
                    </svg>
                  </a>
                  <a href="https://t.me/swisscheesegroup" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                      <path d="M4.91725 9.61635L0.400472 8.14469C0.400472 8.14469 -0.139333 7.92568 0.0344845 7.42906C0.0702658 7.32665 0.142445 7.23951 0.358367 7.08976C1.35916 6.39217 18.8823 0.0938899 18.8823 0.0938899C18.8823 0.0938899 19.3771 -0.0728325 19.6689 0.0380587C19.7411 0.0604046 19.806 0.101525 19.8571 0.157213C19.9082 0.212901 19.9436 0.281157 19.9596 0.355001C19.9911 0.485428 20.0043 0.619615 19.9988 0.753685C19.9974 0.869666 19.9833 0.977164 19.9727 1.14574C19.866 2.86771 16.6722 15.7194 16.6722 15.7194C16.6722 15.7194 16.4811 16.4714 15.7965 16.4972C15.6282 16.5026 15.4606 16.4741 15.3036 16.4134C15.1466 16.3526 15.0034 16.2609 14.8827 16.1437C13.5392 14.988 8.89561 11.8673 7.86952 11.181C7.84637 11.1652 7.82688 11.1447 7.81235 11.1207C7.79783 11.0968 7.7886 11.07 7.78531 11.0422C7.77096 10.9699 7.84962 10.8803 7.84962 10.8803C7.84962 10.8803 15.9353 3.69315 16.1504 2.93866C16.1671 2.88021 16.1042 2.85137 16.0196 2.87697C15.4826 3.07454 6.17299 8.95362 5.14551 9.60247C5.07155 9.62485 4.99338 9.6296 4.91725 9.61635Z" fill="#287AFB" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/swisscheese_finance" target="_blank" rel="noopener noreferrer">
                    <img src="/insta-blue.png" className='items-center' alt="instagram" />
                  </a>
                </div>
                <button className='btn-connect connect_2 text-sm p-3 px-4 rounded-2xl font-bold'>Connect Wallet</button>
              </div>
            </div>
          </nav>
        </div>
        <img src="/bg-top-shape.png" className='absolute top-0 left-0 -z-0 w-1/2' alt="image" />
      </section>
      {/* Header End */}

      {/* Banner Start */}
      <section>
        <div className='wrapper relative z-10'>
          <div className='flex grid grid-cols-2 lg:py-32 banner-row relative items-center'>
            <div className='w-full'>
              <h1 className='xl:text-7xl md:text-6xl text-4xl text-[#287AFB] azonix'>VTS</h1>
              <div className='flex items-end mt-3'>
                <h1 className='xl:text-7xl md:text-6xl text-4xl text-white text-gradient azonix font-bold'>Utility Tokens</h1>
              </div>
              <p className='text-black py-4 text-light-theme text-sm font-normal lg:w-1/3 leading-loose absolute'>
                Envision, Empower, Evolve Leading the  Revolution through Strategic Web3, Mobile  and Blockchain Engineering
              </p>
            </div>
            <div className='relative'>
              <form className='rounded text-center pre_form'>
                <div className='px-3'>
                  <p className='text-[#273648]'>Round 1</p>
                  <h2 className='stvs-head font-bold'>$VTS Pre Sale</h2>
                </div>
                <div className='lightblue-grad px-10 py-2'>
                  <div className='equate'>1 $VTS = <span className='text-[#287AFB]'>$0.10</span> <span className='text-sm font-bold ml-5'>$0.50</span></div>
                  <div className='flex justify-between items-center mt-2'>
                    <span className='block text-sm font-[600]'>Contributed Amount = 0</span>
                    <span className='block text-sm font-[600]'>Estimated Tokens = 0</span>
                  </div>
                </div>
                <div className='w-full px-6'>
                  <div className='clock-box flex items-baseline gap-2 justify-between'>
                    <div className='flex items-baseline gap-2 px-2 py-3'>
                      <span className='text-4xl azonix font-bold'>51</span> <span className='text-[18px]'>d</span>
                    </div>
                    <div>:</div>
                    <div className='flex items-baseline gap-2 px-2 py-3'>
                      <span className='text-4xl azonix font-bold'>00</span> <span className='text-[18px]'>h</span>
                    </div>
                    <div>:</div>
                    <div className='flex items-baseline gap-2 px-2 py-3'>
                      <span className='text-4xl azonix font-bold'>40</span> <span className='text-[18px]'>m</span>
                    </div>
                    <div>:</div>
                    <div className='flex items-baseline gap-2 px-2 py-3 '>
                      <span className='text-4xl azonix font-bold'>37</span> <span className='text-[18px]'>s</span>
                    </div>
                  </div>
                  <div className='relative'>
                    <button id="dropdownDefaultButton" onClick={() => dropdown == true ? setdropdown(false) : setdropdown(true)} className="text-black bg-white flex justify-between items-center p-4 w-full rounded-[24px]" type="button">
                      <div className='flex  gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C17.0756 0 22 4.92444 22 11C22 17.0756 17.0756 22 11 22C4.92444 22 0 17.0756 0 11C0 4.92444 4.92444 0 11 0Z" fill="#7D55DE" />
                          <path d="M13.5588 9.05683C13.3512 8.93772 13.0858 8.93772 12.8509 9.05683L11.197 10.0369L10.074 10.6597L8.45074 11.6364C8.24315 11.7555 7.97771 11.7555 7.7429 11.6364L6.47354 10.8639C6.26595 10.7448 6.11962 10.5066 6.11962 10.2411V8.75736C6.11962 8.51914 6.23873 8.28433 6.47354 8.13459L7.7429 7.39272C7.95049 7.27361 8.21593 7.27361 8.45074 7.39272L9.72009 8.16522C9.92768 8.28433 10.074 8.52255 10.074 8.78799V9.76808L11.197 9.11468V8.10737C11.197 7.86915 11.0779 7.63434 10.8431 7.4846L8.48137 6.08933C8.27378 5.97022 8.00834 5.97022 7.77352 6.08933L5.35392 7.51523C5.11911 7.63434 5 7.87255 5 8.10737V10.8945C5 11.1327 5.11911 11.3675 5.35392 11.5173L7.7463 12.9125C7.95389 13.0316 8.21933 13.0316 8.45414 12.9125L10.0774 11.9631L11.2004 11.3097L12.8237 10.3602C13.0313 10.2411 13.2967 10.2411 13.5316 10.3602L14.8009 11.1021C15.0085 11.2212 15.1548 11.4594 15.1548 11.7249V13.2086C15.1548 13.4468 15.0357 13.6816 14.8009 13.8314L13.5622 14.5733C13.3546 14.6924 13.0892 14.6924 12.8543 14.5733L11.5816 13.8314C11.374 13.7123 11.2277 13.4741 11.2277 13.2086V12.2591L10.1046 12.9125V13.8926C10.1046 14.1308 10.2238 14.3657 10.4586 14.5154L12.8509 15.9107C13.0585 16.0298 13.324 16.0298 13.5588 15.9107L15.9512 14.5154C16.1588 14.3963 16.3051 14.1581 16.3051 13.8926V11.0749C16.3051 10.8367 16.186 10.6018 15.9512 10.4521L13.5588 9.05683Z" fill="white" />
                        </svg>
                        MATIC
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="#5F6F89" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                    <div id="dropdown" className={`${dropdown == true ? '' : 'hidden'} z-10 mt-2 absolute  bg-white divide-y w-full divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}>
                      <ul className="py-2 text-sm text-start text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                          <a href="#" onClick={() => setdropdown(false)} className="flex  gap-3 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C17.0756 0 22 4.92444 22 11C22 17.0756 17.0756 22 11 22C4.92444 22 0 17.0756 0 11C0 4.92444 4.92444 0 11 0Z" fill="#7D55DE" />
                              <path d="M13.5588 9.05683C13.3512 8.93772 13.0858 8.93772 12.8509 9.05683L11.197 10.0369L10.074 10.6597L8.45074 11.6364C8.24315 11.7555 7.97771 11.7555 7.7429 11.6364L6.47354 10.8639C6.26595 10.7448 6.11962 10.5066 6.11962 10.2411V8.75736C6.11962 8.51914 6.23873 8.28433 6.47354 8.13459L7.7429 7.39272C7.95049 7.27361 8.21593 7.27361 8.45074 7.39272L9.72009 8.16522C9.92768 8.28433 10.074 8.52255 10.074 8.78799V9.76808L11.197 9.11468V8.10737C11.197 7.86915 11.0779 7.63434 10.8431 7.4846L8.48137 6.08933C8.27378 5.97022 8.00834 5.97022 7.77352 6.08933L5.35392 7.51523C5.11911 7.63434 5 7.87255 5 8.10737V10.8945C5 11.1327 5.11911 11.3675 5.35392 11.5173L7.7463 12.9125C7.95389 13.0316 8.21933 13.0316 8.45414 12.9125L10.0774 11.9631L11.2004 11.3097L12.8237 10.3602C13.0313 10.2411 13.2967 10.2411 13.5316 10.3602L14.8009 11.1021C15.0085 11.2212 15.1548 11.4594 15.1548 11.7249V13.2086C15.1548 13.4468 15.0357 13.6816 14.8009 13.8314L13.5622 14.5733C13.3546 14.6924 13.0892 14.6924 12.8543 14.5733L11.5816 13.8314C11.374 13.7123 11.2277 13.4741 11.2277 13.2086V12.2591L10.1046 12.9125V13.8926C10.1046 14.1308 10.2238 14.3657 10.4586 14.5154L12.8509 15.9107C13.0585 16.0298 13.324 16.0298 13.5588 15.9107L15.9512 14.5154C16.1588 14.3963 16.3051 14.1581 16.3051 13.8926V11.0749C16.3051 10.8367 16.186 10.6018 15.9512 10.4521L13.5588 9.05683Z" fill="white" />
                            </svg>
                            MATIC
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setdropdown(false)} className="flex  gap-3 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C17.0756 0 22 4.92444 22 11C22 17.0756 17.0756 22 11 22C4.92444 22 0 17.0756 0 11C0 4.92444 4.92444 0 11 0Z" fill="#7D55DE" />
                              <path d="M13.5588 9.05683C13.3512 8.93772 13.0858 8.93772 12.8509 9.05683L11.197 10.0369L10.074 10.6597L8.45074 11.6364C8.24315 11.7555 7.97771 11.7555 7.7429 11.6364L6.47354 10.8639C6.26595 10.7448 6.11962 10.5066 6.11962 10.2411V8.75736C6.11962 8.51914 6.23873 8.28433 6.47354 8.13459L7.7429 7.39272C7.95049 7.27361 8.21593 7.27361 8.45074 7.39272L9.72009 8.16522C9.92768 8.28433 10.074 8.52255 10.074 8.78799V9.76808L11.197 9.11468V8.10737C11.197 7.86915 11.0779 7.63434 10.8431 7.4846L8.48137 6.08933C8.27378 5.97022 8.00834 5.97022 7.77352 6.08933L5.35392 7.51523C5.11911 7.63434 5 7.87255 5 8.10737V10.8945C5 11.1327 5.11911 11.3675 5.35392 11.5173L7.7463 12.9125C7.95389 13.0316 8.21933 13.0316 8.45414 12.9125L10.0774 11.9631L11.2004 11.3097L12.8237 10.3602C13.0313 10.2411 13.2967 10.2411 13.5316 10.3602L14.8009 11.1021C15.0085 11.2212 15.1548 11.4594 15.1548 11.7249V13.2086C15.1548 13.4468 15.0357 13.6816 14.8009 13.8314L13.5622 14.5733C13.3546 14.6924 13.0892 14.6924 12.8543 14.5733L11.5816 13.8314C11.374 13.7123 11.2277 13.4741 11.2277 13.2086V12.2591L10.1046 12.9125V13.8926C10.1046 14.1308 10.2238 14.3657 10.4586 14.5154L12.8509 15.9107C13.0585 16.0298 13.324 16.0298 13.5588 15.9107L15.9512 14.5154C16.1588 14.3963 16.3051 14.1581 16.3051 13.8926V11.0749C16.3051 10.8367 16.186 10.6018 15.9512 10.4521L13.5588 9.05683Z" fill="white" />
                            </svg>
                            MATIC
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setdropdown(false)} className="flex  gap-3 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C17.0756 0 22 4.92444 22 11C22 17.0756 17.0756 22 11 22C4.92444 22 0 17.0756 0 11C0 4.92444 4.92444 0 11 0Z" fill="#7D55DE" />
                              <path d="M13.5588 9.05683C13.3512 8.93772 13.0858 8.93772 12.8509 9.05683L11.197 10.0369L10.074 10.6597L8.45074 11.6364C8.24315 11.7555 7.97771 11.7555 7.7429 11.6364L6.47354 10.8639C6.26595 10.7448 6.11962 10.5066 6.11962 10.2411V8.75736C6.11962 8.51914 6.23873 8.28433 6.47354 8.13459L7.7429 7.39272C7.95049 7.27361 8.21593 7.27361 8.45074 7.39272L9.72009 8.16522C9.92768 8.28433 10.074 8.52255 10.074 8.78799V9.76808L11.197 9.11468V8.10737C11.197 7.86915 11.0779 7.63434 10.8431 7.4846L8.48137 6.08933C8.27378 5.97022 8.00834 5.97022 7.77352 6.08933L5.35392 7.51523C5.11911 7.63434 5 7.87255 5 8.10737V10.8945C5 11.1327 5.11911 11.3675 5.35392 11.5173L7.7463 12.9125C7.95389 13.0316 8.21933 13.0316 8.45414 12.9125L10.0774 11.9631L11.2004 11.3097L12.8237 10.3602C13.0313 10.2411 13.2967 10.2411 13.5316 10.3602L14.8009 11.1021C15.0085 11.2212 15.1548 11.4594 15.1548 11.7249V13.2086C15.1548 13.4468 15.0357 13.6816 14.8009 13.8314L13.5622 14.5733C13.3546 14.6924 13.0892 14.6924 12.8543 14.5733L11.5816 13.8314C11.374 13.7123 11.2277 13.4741 11.2277 13.2086V12.2591L10.1046 12.9125V13.8926C10.1046 14.1308 10.2238 14.3657 10.4586 14.5154L12.8509 15.9107C13.0585 16.0298 13.324 16.0298 13.5588 15.9107L15.9512 14.5154C16.1588 14.3963 16.3051 14.1581 16.3051 13.8926V11.0749C16.3051 10.8367 16.186 10.6018 15.9512 10.4521L13.5588 9.05683Z" fill="white" />
                            </svg>
                            MATIC
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setdropdown(false)} className="flex  gap-3 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C17.0756 0 22 4.92444 22 11C22 17.0756 17.0756 22 11 22C4.92444 22 0 17.0756 0 11C0 4.92444 4.92444 0 11 0Z" fill="#7D55DE" />
                              <path d="M13.5588 9.05683C13.3512 8.93772 13.0858 8.93772 12.8509 9.05683L11.197 10.0369L10.074 10.6597L8.45074 11.6364C8.24315 11.7555 7.97771 11.7555 7.7429 11.6364L6.47354 10.8639C6.26595 10.7448 6.11962 10.5066 6.11962 10.2411V8.75736C6.11962 8.51914 6.23873 8.28433 6.47354 8.13459L7.7429 7.39272C7.95049 7.27361 8.21593 7.27361 8.45074 7.39272L9.72009 8.16522C9.92768 8.28433 10.074 8.52255 10.074 8.78799V9.76808L11.197 9.11468V8.10737C11.197 7.86915 11.0779 7.63434 10.8431 7.4846L8.48137 6.08933C8.27378 5.97022 8.00834 5.97022 7.77352 6.08933L5.35392 7.51523C5.11911 7.63434 5 7.87255 5 8.10737V10.8945C5 11.1327 5.11911 11.3675 5.35392 11.5173L7.7463 12.9125C7.95389 13.0316 8.21933 13.0316 8.45414 12.9125L10.0774 11.9631L11.2004 11.3097L12.8237 10.3602C13.0313 10.2411 13.2967 10.2411 13.5316 10.3602L14.8009 11.1021C15.0085 11.2212 15.1548 11.4594 15.1548 11.7249V13.2086C15.1548 13.4468 15.0357 13.6816 14.8009 13.8314L13.5622 14.5733C13.3546 14.6924 13.0892 14.6924 12.8543 14.5733L11.5816 13.8314C11.374 13.7123 11.2277 13.4741 11.2277 13.2086V12.2591L10.1046 12.9125V13.8926C10.1046 14.1308 10.2238 14.3657 10.4586 14.5154L12.8509 15.9107C13.0585 16.0298 13.324 16.0298 13.5588 15.9107L15.9512 14.5154C16.1588 14.3963 16.3051 14.1581 16.3051 13.8926V11.0749C16.3051 10.8367 16.186 10.6018 15.9512 10.4521L13.5588 9.05683Z" fill="white" />
                            </svg>
                            MATIC
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='py-3 flex gap-4'>
                    <div className='text-start w-2/4'>
                      <label htmlFor="" className='text-[#5F6F89] mb-2 block font-[600] text-[13px]'>Amount You Pay</label>
                      <input type="text" value='1200' className='w-full p-4 focus:outline-none rounded-[23px] text-[#273648] text-[14px] font-bold' />
                    </div>
                    <div className='text-start w-2/4'>
                      <label htmlFor="" className='text-[#5F6F89] mb-2 block font-[600] text-[13px]'>TRHUB Amount You Receive</label>
                      <input type="text" value='1459920,000' className='w-full p-4 focus:outline-none rounded-[23px] text-[#273648] text-[14px] font-bold' />
                    </div>
                  </div>
                  <button className='banner_btn w-full p-4 text-white font-[600] mt-4 text-sm'>Connect Wallet</button>
                  <div className='flex justify-center gap-2 items-center text-sm pt-4'>
                    <span className='text-[#5F6F89] font-[600]'>
                      Powered by
                    </span>
                    <img src="/logo-lion.png" className="w-[20px]" alt="Flowbite Logo"></img>
                    <span className='text-[#267BF6] font-[600]'>VTS Blockchain Engineers</span>
                  </div>
                </div>

              </form>
              <div className='absolute banner-coin'>
                <img src="/coin.png" alt="image" />
              </div>
            </div>
          </div>
          <div className='absolute banner-img'>
            <img src="/diamond.png" alt="image" />
          </div>
          <div className='absolute banner-shadow'>
            <img src="/shadow.png" alt="image" />
          </div>
        </div>
      </section>
      {/* Banner End */}


    </main >
  )
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Cards from '../cards/Cards'

function Home() {
  return (
    <>
    <Header />

{/* <section class="bg-gray-900 text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Create Your Own Poll Today!

      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        A Decentralized Voting App
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          to="/createpolls"
        >
          Get Started
        </Link>

        <Link
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          to="">
          How it Works
        </Link>
      </div>
    </div>
  </div>
</section> */}

<section class="bg-white h-screen flex justify-center align-center flex-col  dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Blockproffer Documentation</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 class="mb-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">Create Your Own Polls Today!</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at BlockProffer we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/createpolls" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    </div>
</section>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
              <p class="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Legal</h3>
              <p class="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
              <p class="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Finance</h3>
              <p class="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
              <p class="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Operations</h3>
              <p class="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
          </div>
      </div>
  </div>
</section>

<section class='pt-[5rem] h-screen dark:bg-gray-900'>
  
  <h1 class='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center'>
    Our Integrations
  </h1>

  <p class="text-gray-400 text-[1.3rem] text-center ">Here is a list of Integrations we made with our Decentralized Application</p>

  <div class="flex flex-col items-center justify-center mt-8">
    <div class="flex flex-wrap justify-center">
      <div class="flex flex-col items-center justify-center w-80 h-80 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" class="w-60 h-60 mt-4" alt="Meta Mask"/>
        <p class="mt-4 text-xl font-bold text-gray-900 dark:text-white">Meta Mask</p>
      </div>
      <div class="flex flex-col items-center justify-center w-80 h-80 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <svg class="w-60 h-60 mt-4" viewBox="0 0 633.04 126.61" xmlns="http://www.w3.org/2000/svg"><g fill="#f3ba2f"><path d="m38.72 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z"/><path d="m3.64 53.19h20.23v20.23h-20.23z" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -40.19 28.27)"/><path d="m38.72 73.41 24.59 24.59 24.6-24.6 14.31 14.29-.01.01-38.9 38.91-38.9-38.89-.02-.02z"/><path d="m101.64 53.19h20.23v20.23h-20.23z" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -11.49 97.57)"/><path d="m77.82 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54-.02.02.02.03 14.51 14.5 14.51-14.52.01-.01z"/><g transform="translate(.55)"><path d="m148.37 30.68h31.12q11.58 0 17.52 6a15.5 15.5 0 0 1 4.59 11.32v.19a16.67 16.67 0 0 1 -.71 5.08 15.6 15.6 0 0 1 -1.91 4 14.77 14.77 0 0 1 -2.76 3.12 17.92 17.92 0 0 1 -3.39 2.3 22.66 22.66 0 0 1 9.17 6q3.34 3.8 3.34 10.5v.19a17.44 17.44 0 0 1 -1.77 8.06 15.72 15.72 0 0 1 -5.07 5.76 24.05 24.05 0 0 1 -7.95 3.45 42.7 42.7 0 0 1 -10.29 1.15h-31.89zm28 27.14a15.39 15.39 0 0 0 7.77-1.68 5.8 5.8 0 0 0 2.86-5.42v-.19a5.93 5.93 0 0 0 -2.49-5.13q-2.49-1.77-7.19-1.77h-14.56v14.19zm3.93 27.05a14.2 14.2 0 0 0 7.7-1.77 6.08 6.08 0 0 0 2.78-5.52v-.19a6.31 6.31 0 0 0 -2.59-5.32q-2.58-2-8.34-2h-17.09v14.8z"/><path d="m223.88 30.68h14.77v67.14h-14.77z"/><path d="m261 30.68h13.62l31.48 41.32v-41.32h14.58v67.14h-12.57l-32.51-42.68v42.68h-14.6z"/><path d="m365.4 30.2h13.6l28.77 67.62h-15.42l-6.14-15.06h-28.39l-6.14 15.06h-15.06zm15.54 39.52-8.94-21.78-8.9 21.78z"/><path d="m423.74 30.68h13.62l31.46 41.32v-41.32h14.58v67.14h-12.57l-32.51-42.68v42.68h-14.58z"/><path d="m536.56 99a34.93 34.93 0 0 1 -13.72-2.68 33.17 33.17 0 0 1 -18.13-18.32 35.54 35.54 0 0 1 -2.59-13.53v-.19a34.84 34.84 0 0 1 9.79-24.51 33.23 33.23 0 0 1 11-7.48 35.9 35.9 0 0 1 14.19-2.73 44.49 44.49 0 0 1 8.58.77 35.66 35.66 0 0 1 7.06 2.11 30.5 30.5 0 0 1 5.85 3.26 39.52 39.52 0 0 1 5 4.22l-9.39 10.84a35.71 35.71 0 0 0 -8-5.57 20.47 20.47 0 0 0 -9.16-2 18.58 18.58 0 0 0 -14 6.14 21.09 21.09 0 0 0 -4.04 6.67 22.87 22.87 0 0 0 -1.43 8.11v.19a23.21 23.21 0 0 0 1.43 8.1 21.32 21.32 0 0 0 4 6.71 18.46 18.46 0 0 0 14 6.24 20.52 20.52 0 0 0 9.73-2.11 37.62 37.62 0 0 0 7.91-5.76l9.4 9.5a47.93 47.93 0 0 1 -5.37 5 32 32 0 0 1 -6.09 3.79 31.56 31.56 0 0 1 -7.24 2.39 43.11 43.11 0 0 1 -8.78.84z"/><path d="m581.47 30.68h50.53v13.14h-36v13.62h31.7v13.14h-31.65v14.1h36.45v13.14h-51z"/></g></g></svg>
        <p class="mt-4 text-xl font-bold text-gray-900 dark:text-white">Binance</p>
      </div>
      <div class="flex flex-col items-center justify-center w-80 h-80 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img src="https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.svg" class="w-60 h-60 mt-4" alt="Coinbase"/>
        <p class="mt-4 text-xl font-bold text-gray-900 dark:text-white">Coinbase</p>
      </div>
    </div>
  </div>

  <div>
    
  </div>



</section>


<section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-8 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">This is a Voting Revolution</h2>
            <p class="mb-4">As we say, "Each vote counts", voting is a duty of every citizen to make our country a better place. Until now people are restrained to vote as some are aged, some are physically able and some are just too lazy to go and cast their vote.</p>
            <p class="mb-4">But not anymore, people can now cast their vote with the comfort of their homes, Blockproffer engages and makes voting super safe and accessible, as indian government claims that till the year 2025 every rural area in india will surely have the long awaited internet connection, post that each and every person across the country can cast their vote from anywhere</p>
            <p class="mb-4">Blockproffer integrates the concept of blockchain to voting which is revolutionary in itself.</p>
            <p class="mb-4">In the world of emerging technologies the concept of Web3 is arising at hyperspeed, web3 is a place where all the data on the internet is Decentralised, and Blockproffer will be a step to contribute to the emerging future.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
    </div>
</section>


<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
          <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>
</section>








    <Footer />
    </>
  )
}

export default Home


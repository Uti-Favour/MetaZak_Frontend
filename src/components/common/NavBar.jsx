import React from 'react'
import { navContent } from '../../constant'




const NavBar = () => {


  return (
    <>
          <nav className="flex justify-between  mx-10 ">
            <div className=" mt-8">
              <img
                src="/metazak_logo_asset.png"
                alt="metazal logo"
                className="w-10 h-10"
              />
            </div>
            <ul className="flex space-x-10 text-white  mt-8">
              {navContent.map(navlink => (
               <li><a href={navlink.link} key={navlink.key}>{navlink.page}</a></li>
              ))}
            </ul>

            <div className="flex items-center space-x-5 text-white">
              <div className="flex space-x-2 items-center">
                <button>Sign In</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 -mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>

              <button className="border border-slate-200 px-3 py-1 rounded-3xl">
                Contact us
              </button>
            </div>
          </nav>   
    </>
  )
}

export default NavBar

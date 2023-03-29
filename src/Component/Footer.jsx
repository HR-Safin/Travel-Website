import React from "react"

export default function Footer() {
  return (
    <>
      
      <footer className="w-full text-slate-500">
        
        <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid justify-items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  
                >
                  Destination
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Customers
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Why us?
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  
                >
                  About us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About us
                    </a>
                  </li>
                  
                 
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-3-sub"
                >
                  Get in touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Support
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Partners
                    </a>
                  </li>
                
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/*      <!-- Sub Footer --> */}
        <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
              <a
                
                className="col-span-1 flex items-center gap-2 whitespace-nowrap text-blue-500 font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6 text-2xl"
                href="javascript:void(0)"
              >
               
                TravelGO
              </a>
              <nav
                className="col-span-3 md:col-span-4 lg:col-span-6"
                
              >
                <h3 className="sr-only" >
                  Get in touch
                </h3>
                <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                  <li className="leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      T&C
                    </a>
                  </li>
                  <li className="leading-6">
                    <a
                     
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="leading-6">
                    <a
                      
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
}
import { Link } from "react-router-dom"
// import Logo from '../assets/images/header.jpg'

export default function Header() {

  return (
    <>

    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
  <br></br>
    <div class="flex items-center flex-shrink-0 text-white md:font-serif p-4">
     <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight"><Link to="/">BarScapes</Link></span>
  </div>
  <br></br>

  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

    <div>
      <div class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 bg-yellow-100 divide-black	"><Link to="/pages/create-account">Create-Account</Link></div>
    </div>

    <div>
      <div class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 bg-yellow-100 outline-black	"><Link to="/pages/comment">Comment</Link></div>
    </div>

    <div>
      <div class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 bg-yellow-100 outline-black"><Link to="/pages/login">Login</Link></div>
    </div>

  </div>

  {/* <div className="card bg-white card-rounded w-50"> */}
      {/* <img src={ Logo } alt="Logo" width="1000px" background-size="cover" /></div> */}

</nav>

    </>
  );
}
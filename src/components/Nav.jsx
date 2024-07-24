import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center w-full max-container '>
        <a href="/" className='hover:scale-105 duration-200 '>
          <img src={headerLogo} alt="image" width={130}
          height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-20 max-md:hidden'>
            {navLinks.map((item)=>(
                <li key={item.label} className='hover:scale-105 duration-200 '>
                  <a href={item.href} className='font-montserrat text-slate-gray text-lg leading-normal'>{item.label}</a>

                </li>
            ))}
        </ul>
        <div className="hidden max-md:block ">
          <img src={hamburger} alt="" className='w-5' />
        </div>
      </nav>
    </header>
  )
}

export default Nav
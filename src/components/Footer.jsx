import Kamran_Resume from '../assets/Kamran_Resume.pdf'
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Globe } from 'lucide-react';
import { FileUser } from 'lucide-react';

const Footer = () => {
  return (
    <div className='flex justify-center gap-24 p-2 mt-4'>
         <a className="flex items-center gap-1 cursor-pointer hover:scale-105">
            <Globe className='size-4 text-blue-600'/>
            <a className='font-bold text-blue-600' href='https://mohdkamran-khan.github.io/KAMRAN-portfolio/'>Portfolio</a>
        </a>
         <a className="flex items-center gap-1 cursor-pointer hover:scale-105">
            <Linkedin className='size-4 text-blue-600'/>
            <a className='font-bold  text-blue-600' href='https://www.linkedin.com/in/mohdkamran-khan/'>LinkedIn </a>
        </a>
         <a className="flex items-center gap-1 cursor-pointer hover:scale-105">
            <Github className='size-4 text-blue-600'/>
            <a className='font-bold text-blue-600' href='https://github.com/mohdkamran-khan'>GitHub </a>
        </a>
         <a className="flex items-center gap-1 cursor-pointer hover:scale-105 shadow-xl rounded p-1">
            <FileUser className='size-4 text-blue-600'/>
            <a className='font-bold text-blue-600' target="_blank" href={Kamran_Resume}>Resume </a>
        </a>
       </div>
  )
}

export default Footer
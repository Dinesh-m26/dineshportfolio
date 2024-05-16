import React from 'react'
import { FaGithub, FaRegArrowAltCircleRight } from 'react-icons/fa'

export const Project = () => {
  return (
    <div id='projects' className='w-full lg:w-2/3 mx-auto text-md px-4 lg:px-0' >
      <h1 className='text-[#90A0D9] text-3xl lg:text-5xl font-bold text-center py-7'>PROJECTS</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {/* Project 1 */}
        <div className='bg-gray-200 p-4 rounded-md py-auto' data-aos="zoom-in-up">
          <h2 className='text-[#23283E] text-lg font-semibold mb-2'>Facebook-clone</h2>
          <p className='text-[#476fff] font-medium'>Using Html ,css</p>
          <div className='flex space-x-2 pt-2'>
            <a href="https://github.com/Dinesh-m26/facebook-clone.git" target='_blank' rel='noopener noreferrer' ><FaGithub size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
            <a href='https://facebookcloned.netlify.app/' target='_blank' rel='noopener noreferrer'><FaRegArrowAltCircleRight size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
          </div>
        </div>
        {/* Project 2 */}
        <div className='bg-gray-200 p-4 rounded-md py-auto' data-aos="zoom-in-up" >
          <h2 className='text-[#23283E] text-lg font-semibold mb-2'>E-commerce-website</h2>
          <p className='text-[#476fff] font-medium'>Using Html ,css ,Bootstrap</p>
          <div className='flex space-x-2 pt-2'>
            <a href="https://github.com/Dinesh-m26/project1.git" target='_blank' rel='noopener noreferrer' ><FaGithub size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
            <a href='https://digosclothing.netlify.app/' target='_blank' rel='noopener noreferrer' ><FaRegArrowAltCircleRight size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
          </div>
        </div>
        {/* Project 3 */}
        <div className='bg-gray-200 p-4 rounded-md py-auto' data-aos="zoom-in-up" >
          <h2 className='text-[#23283E] text-lg font-semibold mb-2'>ToDo-List</h2>
          <p className='text-[#476fff] font-medium'>Using Html ,css, Bootstrap, JavaScript</p>
          <div className='flex space-x-2 pt-2'>
            <a href="https://github.com/Dinesh-m26/yourmind.git" target='_blank' rel='noopener noreferrer' ><FaGithub size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
            <a href='https://yourmind.netlify.app/' target='_blank' rel='noopener noreferrer'><FaRegArrowAltCircleRight size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
          </div>
        </div>

        {/* Project 4 */}
        <div className='bg-gray-200 p-4 rounded-md py-auto' data-aos="zoom-in-up" >
          <h2 className='text-[#23283E] text-lg font-semibold mb-2'>CRUD</h2>
          <p className='text-[#476fff] font-medium'>Using Reactjs</p>
          <div className='flex space-x-2 pt-2'>
            <a href="https://github.com/Dinesh-m26/CRUD.git" target='_blank' rel='noopener noreferrer' ><FaGithub size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
            <a href='https://cruddashboard.netlify.app/' target='_blank' rel='noopener noreferrer' ><FaRegArrowAltCircleRight size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
          </div>
          
        </div>
          {/* Project 4 */}
          <div className='bg-gray-200 p-4 rounded-md py-auto' data-aos="zoom-in-up" >
          <h2 className='text-[#23283E] text-lg font-semibold mb-2'>LASLESVPN (INTERN)</h2>
          <p className='text-[#476fff] font-medium'>Using Reactjs</p>
          <div className='flex space-x-2 pt-2'>
            <a href="https://github.com/Dinesh-m26/Laslesvpn.git" target='_blank' rel='noopener noreferrer' ><FaGithub size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
            <a href='https://laslesvvpn.netlify.app/' target='_blank' rel='noopener noreferrer' ><FaRegArrowAltCircleRight size={30} color='black' className='transform transition-transform hover:scale-110' /></a>
          </div>
          
        </div>


      </div>
    </div>)
}

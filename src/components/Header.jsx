import profile from "../assets/profile.png"

const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-xl mb-4">
      <div className="ml-2">
        <header className='text-5xl font-bold'>
        Mohd Kamran Khan
        </header>
        <p className='text-lg'>Full Stack Web Developer</p>
      </div>
        <img src={profile} alt="Profile" className='rounded-xl w-24 mr-2'/>
    </div>
      </>
  )
}

export default Header
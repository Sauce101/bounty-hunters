import { Link } from 'react-router-dom'
import vadersDirection from '../assets/images/Home/bounty-hunters.jpg'

function Error() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-blackBlack">
      <div className="py-2 w-screen bg-red-700 mb-3" />
      <h2 className="text-white text-6xl font-normal leading-normal mt-0 mb-2">
        404
      </h2>
      <p className="text-white text-base font-light leading-relaxed mt-0 mb-4">
        This is Not the page you are looking for!
      </p>
      <img
        src={vadersDirection}
        className="w-1/2 portrait:w-11/12 h-auto mb-8 hidden lg:block"
        alt="..."
      />
      <Link to="/">
        <button
          type="button"
          className="bg-red-700 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Back to Homepage
        </button>
      </Link>
      <div className="py-2 w-screen bg-red-700 mt-auto" />
    </div>
  )
}
export default Error

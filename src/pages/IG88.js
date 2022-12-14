import TextIG88 from '../assets/data/TextIG88'
import ig1 from '../assets/images/IG-88/ig88-01.png'
import ig3 from '../assets/images/IG-88/ig88-03.png'
import ig5 from '../assets/images/IG-88/ig88-05.webp'
import ig2000 from '../assets/images/Starships/IG2000_schem.webp'

function IG88() {
  const HUNTER = [ig1, ig3, ig5]
  return (
    <>
      {/* Landscape */}
      <div className="portrait:hidden container mx-auto flex">
        <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800 mx-auto">
          IG-88
        </h2>
      </div>
      <div className="portrait:hidden container mx-auto flex flex-wrap justify-center">
        <div className="flex space-x-8 mb-4">
          {HUNTER.map((pic) => (
            <div key={`${pic}`}>
              <img
                src={pic}
                alt="..."
                className="shadow-lg rounded max-w-full h-auto border-none object-cover"
              />
            </div>
          ))}
        </div>
        <TextIG88 />
      </div>
      {/* Portrait */}
      <div className="landscape:hidden m-2 container mx-auto flex flex-col px-4 items-center">
        <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800">
          IG-88
        </h2>
        <div className="py-4">
          <img
            src={ig3}
            alt="..."
            className="shadow-lg rounded h-full border-none"
          />
        </div>
        <TextIG88 />
      </div>
      {/* Portrait End */}
      {/* Starship */}
      <div className="container mx-auto flex flex-wrap justify-center mb-12">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          IG-2000
        </h2>
        <img
          src={ig2000}
          alt="..."
          className="shadow-lg rounded h-auto border-none mb-8"
        />
      </div>
    </>
  )
}
export default IG88

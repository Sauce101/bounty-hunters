import Text4Lom from '../assets/data/Text4Lom'
import fourLom4 from '../assets/images/4-LOM/4lom_4.webp'
import fourLom3 from '../assets/images/4-LOM/4lom_3.webp'
import fourLom7 from '../assets/images/4-LOM/4lom_7.webp'
import mistHunter from '../assets/images/Starships/MistHunter.webp'

function FourLOM() {
  const HUNTER = [fourLom4, fourLom3, fourLom7]

  return (
    <>
      {/* Landscape */}
      <div className="portrait:hidden container mx-auto flex flex-wrap justify-center">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          4-LOM
        </h2>
        <div className="flex space-x-8 mb-4">
          {HUNTER.map((pic) => (
            <div key={`${pic}`}>
              <img
                src={pic}
                alt="..."
                className="shadow-lg rounded h-40 md:h-80 align-middle border-none object-cover"
              />
            </div>
          ))}
        </div>
        <Text4Lom />
      </div>
      {/* Portrait */}
      <div className="landscape:hidden m-2 container mx-auto">
        <div className="flex container mx-auto">
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800 mx-auto">
            4-LOM
          </h2>
        </div>
        <div className="w-full sm:w-4/12 px-4 py-4 mx-auto">
          <img
            src={fourLom3}
            alt="..."
            className="shadow-lg rounded h-auto align-middle border-none"
          />
        </div>
        <Text4Lom />
      </div>
      {/* Portrait End */}
      {/* Starship */}
      <div className="container mx-auto flex flex-wrap justify-center">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          Mist Hunter
        </h2>
        <img
          src={mistHunter}
          alt="..."
          className="shadow-lg rounded h-auto align-middle border-none mb-8"
        />
      </div>
    </>
  )
}
export default FourLOM

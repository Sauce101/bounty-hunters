import TextBossk from '../assets/data/TextBossk'
import bossk1 from '../assets/images/Bossk/bossk_1.jpg'
import bossk3 from '../assets/images/Bossk/bossk_3.jpg'
import bossk7 from '../assets/images/Bossk/bossk_7.jpg'
import houndstooth from '../assets/images/Starships/Houndstooth_schem.webp'

function Bossk() {
  const HUNTER = [bossk1, bossk3, bossk7]

  return (
    <>
      {/* Landscape */}
      <div className="portrait:hidden container mx-auto flex flex-wrap justify-center">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          Bossk
        </h2>
        <div className="flex space-x-8 mb-4">
          {HUNTER.map((pic) => (
            <div>
              <img
                src={`${pic}`}
                alt="..."
                key={`${pic}`}
                className="shadow-lg rounded h-96 align-middle border-none object-cover"
              />
            </div>
          ))}
        </div>
        <TextBossk />
      </div>
      {/* Portrait */}
      <div className="landscape:hidden m-2 container mx-auto flex flex-col">
        <div className="flex container mx-auto">
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800 mx-auto">
            Bossk
          </h2>
        </div>
        <div className="w-full sm:w-4/12 px-4 py-4 mx-auto">
          <img
            src={bossk3}
            alt="..."
            className="shadow-lg rounded h-auto align-middle border-none"
          />
        </div>
        {/* Text */}
        <TextBossk />
      </div>
      {/* Portrait End */}
      {/* Starship */}
      <div className="container mx-auto flex flex-wrap justify-center">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          Houndstooth
        </h2>
        <img
          src={houndstooth}
          alt="..."
          className="shadow-lg rounded h-auto align-middle border-none mb-8"
        />
      </div>
    </>
  )
}
export default Bossk

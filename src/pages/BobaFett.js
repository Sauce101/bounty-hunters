import TextBoba from '../assets/data/TextBoba'
import boba10 from '../assets/images/BobaFett/bobafett_10.webp'
import boba3 from '../assets/images/BobaFett/bobafett_3.webp'
import boba5 from '../assets/images/BobaFett/bobafett_5.webp'
import slaveI from '../assets/images/Starships/SlaveI_egvv.webp'

function BobaFett() {
  const HUNTER = [boba10, boba3, boba5]

  return (
    <>
      {/* Landscape */}
      <div className="portrait:hidden container mx-auto flex flex-wrap justify-center">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          Boba Fett
        </h2>
        <div className="flex space-x-8 mb-4">
          {HUNTER.map((pic) => (
            <div key={`${pic}`}>
              <img
                src={pic}
                alt="..."
                className="shadow-lg rounded h-80 align-middle border-none object-cover"
              />
            </div>
          ))}
        </div>
        <TextBoba />
      </div>
      {/* Portrait */}
      <div className="landscape:hidden m-2 font-exo container mx-auto">
        <div className="flex container mx-auto font-exo">
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800 mx-auto">
            Boba Fett
          </h2>
        </div>
        <div className="w-full sm:w-4/12 px-4 py-4 mx-auto">
          <img
            src={boba3}
            alt="..."
            className="shadow-lg rounded h-auto align-middle border-none"
          />
        </div>
        <TextBoba />
      </div>
      {/* Portrait End */}
      {/* Starship */}
      <div className="container mx-auto flex flex-wrap justify-center">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          Slave I
        </h2>
        <img
          src={slaveI}
          alt="..."
          className="shadow-lg rounded h-auto align-middle border-none mb-8"
        />
      </div>
    </>
  )
}
export default BobaFett

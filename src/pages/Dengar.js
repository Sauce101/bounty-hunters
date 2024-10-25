import TextDengar from '../assets/data/TextDengar'
import dengar12 from '../assets/images/Dengar/dengar_12.webp'
import dengar5 from '../assets/images/Dengar/dengar_5.webp'
import dengar9 from '../assets/images/Dengar/dengar_9.webp'
import jumpmaster5000 from '../assets/images/Starships/jumpmaster_5000.jpg'

function Dengar() {
  const HUNTER = [dengar12, dengar5, dengar9]
  return (
    <>
      {/* Landscape */}
      <div className="portrait:hidden container mx-auto flex flex-wrap justify-center">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-4 text-slate-800">
          Dengar
        </h2>
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
        <TextDengar />
      </div>
      {/* Portrait */}
      <div className="landscape:hidden m-2 container mx-auto flex flex-col px-4 items-center">
        <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800">
          Dengar
        </h2>
        <div className="py-4">
          <img
            src={dengar5}
            alt="..."
            className="shadow-lg rounded h-full border-none"
          />
        </div>
        <TextDengar />
      </div>
      {/* Portrait End */}
      {/* Starship */}
      <div className="container mx-auto flex flex-wrap justify-center mb-12">
        <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-slate-800 w-screen">
          Punishing One
        </h2>
        <img
          src={jumpmaster5000}
          alt="..."
          className="shadow-lg rounded h-auto border-none mb-8"
        />
      </div>
    </>
  )
}
export default Dengar

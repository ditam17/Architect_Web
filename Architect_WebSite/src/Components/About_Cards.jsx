export default function About_Cards({ Name, Post = "Architect", image }) {
  return (
    <>
      <div className="max-sm:shadow-xl">
        <div>
          <img src={image} alt="" className="grayscale-75" />
        </div>
        <h4 className="text-2xl my-4">{Name}</h4>
        <p className="text-lg opacity-65 my-3">{Post}</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <button
          type="button"
          className="bg-gray-300 w-full p-1  text-lg mt-3 cursor-pointer hover:bg-gray-500"
        >
          Contact
        </button>
      </div>
    </>
  );
}

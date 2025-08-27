export default function Contact() {
  return (
    <>
      <aside className="mt-10 mb-3 mx-8" id="contact">
        <div></div>
        <h2 className="text-lg mb-3">Contact</h2>
        <hr />
        <p className="mt-3">
          Lets get in touch and talk about your next project.
        </p>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="block p-2 border-1 w-full mt-5 border-gray-300"
          />

          <input
            type="email"
            placeholder="Email"
            className="block p-2 border-1 w-full mt-5 border-gray-300"
          />

          <input
            type="text"
            placeholder="Subject"
            className="block p-2 border-1 w-full mt-5 border-gray-300"
          />

          <input
            type="text"
            placeholder="Comment"
            className="block p-2 border-1 w-full mt-5 border-gray-300"
          />

          <button className="text-lg bg-black text-white p-2 my-8">
            SEND MESSAGE
          </button>
        </form>
        <img src="https://www.w3schools.com/w3images/map.jpg" alt="" />
      </aside>
    </>
  );
}

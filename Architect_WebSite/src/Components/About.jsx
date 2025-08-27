import About_Cards from "./About_Cards";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="mt-10 ">
          <h2 className="text-2xl mb-3">About</h2>
          <hr />
        </div>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="mt-8 grid grid-cols-4 gap-5 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <About_Cards
            image={"https://www.w3schools.com/w3images/team2.jpg"}
            Name={"John Doe"}
            Post="CEO & Founder"
          />
          <About_Cards
            image={"https://www.w3schools.com/w3images/team1.jpg"}
            Name={"Jane Doe"}
          />
          <About_Cards
            image={"https://www.w3schools.com/w3images/team3.jpg"}
            Name={"Mike Ross"}
          />
          <About_Cards
            image={"https://www.w3schools.com/w3images/team4.jpg"}
            Name={"Dan Star"}
          />
        </div>
      </section>
    </>
  );
}

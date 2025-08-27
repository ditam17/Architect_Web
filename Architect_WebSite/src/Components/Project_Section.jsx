import Projects_Card from "./Projects_Card";
import { houseData } from "./houseData";
export default function Project_Section() {
  return (
    <>
      <section id="projects">
        <div>
          <h2 className="text-2xl mb-3">Projects</h2>
          <hr />
          <div className=" grid grid-cols-4 gap-4 mt-5 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {houseData.map((house) => {
              return (
                <Projects_Card
                  key={house.id}
                  image={house.image}
                  label={house.label}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

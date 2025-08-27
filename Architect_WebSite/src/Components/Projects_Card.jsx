export default function Projects_Card({ image, label }) {
  return (
    <>
      <div className="relative">
        <img src={image} alt="" />
        <h3 className="absolute top-0 bg-black text-white p-3">{label}</h3>
      </div>
    </>
  );
}

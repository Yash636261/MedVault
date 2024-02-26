import img from "../../../assets/security.png";

function Introcard(props) {
  return (
    <div
      className={`relative md:w-48 group mb-4 overflow-hidden bg-black text-black hover:text-white transition duration-200 rounded-lg hover:shadow-md`}
      style={{ height: `${props.height}px` }}
    >
      <img src={props.image} className=" object-cover w-full h-full" alt="" />
      <h2 className="absolute -bottom-16 pb-8 backdrop-blur-sm bg-gradient-to-b from-transparent to-black mx-auto w-full text-white text-center text-xl font-semibold mb-2 transition duration-500 group-hover:-translate-y-10">
        {props.title}
      </h2>
    </div>
  );
}

export default Introcard;

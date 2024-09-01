import { Link } from "react-router-dom";

const Button = (props) => {
  const { link, name } = props;
  return (
    <Link
      to={link}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
    >
      {name}
    </Link>
  );
};

export default Button;

import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Nothing to see here!</h2>
      <p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to the home page
        </Link>
      </p>
    </div>
  );
}

export default NoMatch;

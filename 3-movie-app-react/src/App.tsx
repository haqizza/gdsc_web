import Navbar from './Layouts/Navbar';
import RootRouter from './Router';

const App = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <div className="my-32"></div>
      <RootRouter />
    </div>
  );
}

export default App;

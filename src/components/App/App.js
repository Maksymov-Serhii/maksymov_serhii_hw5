import BookForm from '../BookForm/BookForm';
import ConversionCalc from '../ConversionCalc/ConversionCalc';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>CyberBionic systematics</h1>
      <h3 className='title'>Welcome</h3>
      <BookForm />
      <ConversionCalc />
    </div>
  );
}

export default App;

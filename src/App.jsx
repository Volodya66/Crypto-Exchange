import { Route, Routes } from 'react-router-dom';

// import ErrorPage from 'pages/ErrorPage/ErrorPage';
// import { AppWrapper } from './App.styled';

function App() {
  return (
    <Routes>
      <Route path="/" element={'Hola Amigos'}>
        {/* <Route path="/first" element={<FirstPage />} /> */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  );
}
export default App;

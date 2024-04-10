import { Route, Routes } from 'react-router-dom';

import HomePageNoReg from './pages/HomePageNoRegister/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageNoReg />}>
        {/* <Route path="/crypto" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="/crypto" />} /> */}
      </Route>
    </Routes>
  );
}
export default App;

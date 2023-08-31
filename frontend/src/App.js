import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, Profile, About, Login, Signup, NoPage  } from "./pages";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  );
}

export default App;

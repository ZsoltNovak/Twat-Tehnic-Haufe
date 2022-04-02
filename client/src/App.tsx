import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ROUTES } from "constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        {ROUTES.map(({ path, element, key }) => (
          <Route {...{ path, element, key }} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { MapProvider } from "./component/util/MyContext";
import Home from "./page/HomePage";
import JoinPage from "./page/JoinPage";
import List from "./page/ListPage";
import Login from "./page/LoginPage";
import Request from "./page/RequestPage";
import Question from "./page/QuestionPage";
import Header from "./component/header/Header";

function App() {
  return (
    <MapProvider>
      <div>
        <Header />
        <Routes>
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/"} element={<Home />} />
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/list"} Component={List} />
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/reqeust"} Component={Request} />
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/question"} Component={Question} />
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/login"} Component={Login} />
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/join"} Componentt={JoinPage} />
        </Routes>
      </div>
    </MapProvider>
  )
}

export default App;

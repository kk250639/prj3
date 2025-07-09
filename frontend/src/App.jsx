import {BrowserRouter, Route, Routes} from "react-router";
import {MainLayout} from "./common/MainLayout.jsx";
import {BoardAdd} from "./feature/board/BoardAdd.jsx";
import {BoardList} from "./feature/board/BoardList.jsx";

function BoardDetail() {
  const {id} = useParams();

  useEffect(() => {
    // axios로 헤당 게시물 가져오기

  }, []);

  return <h1>게시물 보기</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<BoardList/>}/>
          <Route path="board/add" element={<BoardAdd/>}/>
          <Route path="board/:id" element={<BoardDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
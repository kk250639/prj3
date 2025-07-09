import {AppNavBar} from "./AppNavBar.jsx";

export function MainLayout() {
  return (
    <div>
      <div>
        <div className="mb-3">
          <AppNavBar/>
        </div>
        <Container>
          <Outlet/>
        </Container>
      </div>
    </div>
  );
}
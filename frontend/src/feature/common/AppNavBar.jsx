export function AppNavBar() {
  return <div>
    <Navbar expan="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>PRJ3</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.link as={NavLink} to href="/">
              HOME
            </Nav.link>
            <Nav.link as={NavLink} to href="/board/add">
              새 글
            </Nav.link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div>
}
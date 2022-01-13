const Layout = ({ children }) => {
  return (
    <>
      <main>
        <header id="header"></header>
        {children}
        <footer id="footer"></footer>
      </main>
    </>
  );
};

export default Layout;

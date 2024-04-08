import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="l-container">{children}</div>
    </>
  );
};
export default Layout;

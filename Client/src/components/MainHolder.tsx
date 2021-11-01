import Navigation from "./Navigation";
import Footer from "./footer";
const MainHolder: React.FC<any> = (props) => {
  return (
    <>
      <Navigation />
      <main className="main">{props.children}</main>
      <Footer />
    </>
  );
};
export default MainHolder;

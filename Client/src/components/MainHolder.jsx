import Navigation from "./Navigation"
import Footer from "./footer"
const MainHolder = (props)=> {
  return (
  <>
<Navigation/>
  <main className="main">
  {props.children}
  </main>
  <Footer/> 
  </>
  )
}
export default MainHolder;
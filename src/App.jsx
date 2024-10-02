import Header from "./Header.jsx";
import Mydata from "./Mydata.jsx";
import Footer from "./Footer.jsx";
import Students from "./student.jsx";
import Map from "./map.jsx";
import Collage from "./assets/collage.jsx";


const name = "LNCT Collage";
const Sno = " 60";
const address = "Rainsen road Bhopal MP";
     


const App=()=>{
  return(
    <>
   <h1 align="center">This is my project</h1> 
    <Header/>
    <Mydata/>
    <Footer/>
    <Students nm="naaz" rol="101" ct="Bhopal"/>
    <Collage cnm={name} seat={Sno} add={address}/>

    <Map/>
    </>
  )
}
export default App;
import './App.scss';
import NavigationComponent from './Components/NavigationComponent';
import { MDBBtn,MDBIcon,MDBContainer } from 'mdb-react-ui-kit';
function App() {
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


 
  return (
    <div className="App ">
      <NavigationComponent/>
    <MDBContainer fluid>

<MDBBtn
  onClick={backToTop}
  id='btn-back-to-top'
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "none",
  }}
  className='btn-floating'
  color='outline-secondary'
  size='lg'>
  <MDBIcon fas icon="arrow-up" />
</MDBBtn>




</MDBContainer>




    </div>
  );
}

export default App;

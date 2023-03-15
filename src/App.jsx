import logo from './logo.svg';
import './App.css';
import Flickity from 'flickity';
import flickitySync from 'flickity-sync';
import { useState } from 'react';
function App() {
  // const [details, setDetails] = useState({name: fullname})
  const styles = {
    container:{
      padding: '0rem 10rem'
    },
    form:{
      display:'flex',
      flexDirection: 'column', 
      gap: '2rem'
    },
    input:{
      backgroundColor: 'aliceblue',
      width:'50vw',
      height: '5vh',
      borderRadius: '1rem',
      border: 'none'
    
    },
    button:{
      padding: '1rem 1.5rem',
      width: '10rem', 
      color: 'white',
      backgroundColor: 'orange'
    }
  }

  fetch('https://02aa-197-211-52-66.eu.ngrok.io/addbook', {
  method : 'POST',
  headers: {'Content-Type': 'Application/json'},
  body: {}
}
  )
  return (
    <div className="App">
      <div style= {styles.container}>
        <h2>BOOK STORE</h2>
        <form action=""style = {styles.form}>
          <input style = {styles.input} placeholder = 'Name' type="text" onChange={ (e) =>{
            console.log(e.target.value)
          }}/>
          <input style = {styles.input} placeholder = 'Author' type="text" />
          <input style = {styles.input} placeholder = 'Year Published' type="text" />
          <input style = {styles.input} placeholder = 'Publisher' type="text" />

          <button style = {styles.button}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;

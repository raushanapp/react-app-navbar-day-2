import './App.css';

function App() {
  const link = ["Services","Project","About"]
  return (
    <div className="App">
       <div className ="navbar">
          <div className ="logo">
            <h3>LOGOBAKERY</h3>
          </div>
          <div className = "links">
             {link.map((e)=>{
               return <p className ="linkText">{e}</p>
             })}
          </div>
          <div className = "contact">
            <button className ="btn">Contact</button>
          </div>
       </div>
    </div>
  );
}

export default App;

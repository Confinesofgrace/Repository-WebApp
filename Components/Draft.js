import React,{useState,useEffect} from "react";
import './App.css';


/* (`https:api.github.com/users/confinesofgrace`)

fetch(`https:api.github.com/users/confinesofgrace`)
 .then(res => res.json())
 .then(data => console.log(data))*/



function App () {

  const [repo, setRepo] = useState([0])

  /*useEffect( () => 
  {
    const fetchRepos =async () => 
    {
      const res = await fetch("https:api.github.com/users/confinesofgrace")
      const data = await res.json()
      setRepo(data)
      
    } 
    fetchRepos()
  },[]); */

  
      /*fetch(`${baseUrl}`)
      .then( response => 
        {
          if (!response.ok) 
          {
            throw new Error ("Couldn't Fetch Resource")
          }
          return response.json();
        } )
      .then(data => console.log(data))
      .catch(error => console.error(error)); */

      //import RootLayout from "./Components/RootLayout";


//const router = createBrowserRouter(
  //createRoutesFromElements(
    //sholud be able to replace 'RootLayout' with 'Navbar' component
   // <Route element= {<RootLayout/>}>
  //    <Route index element = {<Home/>}/>
  //    <Route path="About" element = {<About/>}/>
   // </Route>
//  )
//)

    
  

  return(
   
    <div>

    
      <div id="navbar">
        <div id="logo"><h3>Confinesofgrace</h3></div>
        <div id="nav">
          <div id="home">Home</div>
          <div id="about">About</div>
        </div>
      </div>

    <div id="hero">

      <div id="left-pane">
        <p>Hi,i'm <br></br>Damilola Akinlolu</p>
        <br></br>
        <h4>Repo Page: {repo}</h4>
      </div>

        

      <div id="right-pane">
          <div id = "cards">
            <div id="card1">Repo 1</div>
            <div id="card2"> Repo 2</div>
            <div id="card3">Repo 3</div>
          </div>  

          <div id= "pagination">
            <div id="prev" onClick={() => setRepo(repo - 1)}><button>Back</button></div>
            <div id="but1"><button>1</button></div>
            <div id="but2"><button>2</button></div>
            <div id="but3"><button>3</button></div>
            <div id="next" onClick={() => setRepo(repo + 1)}><button>Next</button></div>


           </div>
                  
      </div>


    </div>



    

    </div>
  )

};



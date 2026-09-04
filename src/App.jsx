import User from "./components/Prs";
// import data from "./data/data";

// function User (props){
  
//     return(
//       <div>
//         <h2>{props.name}</h2>
//         <p>Age : {props.age}</p>
//       </div>
//     );
// }


function App() {
  return(
    <div className = "min-h-screen w-160 m-10 bg-gray-100 rounded-lg content-center justify-center items-center">

      <div className = "p-8">
        <h1 className = "text-5xl"> Room </h1>
        <h2> 5 people are around right now</h2>
      </div>

      {/* <ul>
        {data.map ((user) => (
          <li key = {user.id}>
            <Prs name= {user.name} metier = {user.metier} src={user.src}/>
          </li>
        ))}
      </ul> */}

      <User avatar="https://i.pravatar.cc/150?/img=1" name= "Dale Houston" metier = "Software Enginer"/>
      <User avatar="https://i.pravatar.cc/150?/img=2" name= "Madge Murphy" metier = "Product Designer"/>
      <User avatar="https://i.pravatar.cc/150?/img=3" name= "Margaret Garner" metier = "Writer & Journalis"/>
      <User avatar="https://i.pravatar.cc/150?/img=4" name= "Gertrude Roberts" metier = "Fashion Designer"/>
      <User avatar="https://i.pravatar.cc/150?/img=5" name= "Joshua Olson" metier = "Photographer"/>
    </div>
  );
}

export default App;

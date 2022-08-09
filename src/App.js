import Profile from "./profile/profile";
import "./App.css";
import photo from "./photo.jpg";

let Data = {
  fullname: "ibrahim Djouada",
  bio: "I am 20 years old web developper",
  profession: "programmer/developper",
};

function App() {
  return (
    <div className="App">
      <Profile
        fullname={Data.fullname}
        bio={Data.bio}
        profession={Data.profession}
      >
        <img src={photo} alt="profilephoto"></img>
      </Profile>
    </div>
  );
}

export default App;

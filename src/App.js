import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <h1 className="mainHeading">Social Buttons</h1>
        <div className="buttonsContainer">
{buttonList.map((item, index) => {
  return (
    <button className="buttonItem" key={index} style={{background: `${item?.background}`, color: `${item?.textColor}`}}>{item?.title}</button>
  )
})}
        </div>
      </div>
    </div>
  );
}

export default App;


const buttonList=[
  {
    id: 1,
    title: "Like",
    background:"#eab308",
    textColor: "white",
  },
  {
    id:2,
    title: "Comment",
    background:"white",
    textColor: " #323f4b",
  },  {
    id: 3,
    title: "Share",
    background:"#1d4ed8",
    textColor: "white",
  },
]
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const elements = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />
      <main>
        <div className="container">{elements}</div>
      </main>
    </>
  );
}

export default App;

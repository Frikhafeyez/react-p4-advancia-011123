import { useState } from "react";
import "./App.css";
import NewDepense from "./components/NewDepense";
import Depenses from "./components/Depenses";

const MY_DATA = [
  {
    id: "d1",
    title: "Assurance",
    amount: 342.5,
    date_d: new Date(2022, 0, 4),
  },
  {
    id: "d2",
    title: "Courses",
    amount: 72.5,
    date_d: new Date(2023, 6, 10),
  },
  {
    id: "d3",
    title: "Meubles",
    amount: 572.5,
    date_d: new Date(2023, 2, 30),
  },
  {
    id: "d4",
    title: "voyage",
    amount: 1072.5,
    date_d: new Date(2023, 11, 10),
  },
];

function App() {
  const [dataDepenses, setDataDepenses] = useState(MY_DATA);

  function ajouterDepense(newDep) {
    let id = Math.random().toString();
    setDataDepenses((previous) => {
      return [
        ...previous,
        {
          id,
          ...newDep,
        },
      ];
    });
  }
  return (
    <div>
      <NewDepense addDepense={ajouterDepense}></NewDepense>
      <Depenses data={dataDepenses}></Depenses>
    </div>
  );
}

export default App;

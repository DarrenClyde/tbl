import { useState } from "react";
import loadingIcon from "./Spinner-1s-200px.gif";
import "./App.css";

const all = [
  {
    sername: "Иванов",
    rate: 4.5,
    group: 124,
  },
  {
    sername: "Петров",
    rate: 3,
    group: 245,
  },
];

const first = [
  {
    sername: "Клочков",
    rate: 2.8,
    group: 167,
  },
  {
    sername: "Смирнов",
    rate: 5,
    group: 176,
  },
];

const second = [
  {
    sername: "Пальчиков",
    rate: 4.8,
    group: 180,
  },
  {
    sername: "Самойлов",
    rate: 4.3,
    group: 180,
  },
];

const tabs = ["Все кандидаты", "Прошедшие отбор"];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [results, setResults] = useState(all);
  const [loading, setLoading] = useState(false);

  return (
    <div className="main">
      <h1>Культурология</h1>
      <p>Преподаватель Иванов И.И.</p>
      <div className="actions">
        <div className="tabs">
          {tabs.map((tab, idx) => (
            <button
              className={`tab${activeTab === idx ? " active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(idx);
                idx === 0 ? setResults(all) : setResults(first);
              }}
              key={tab}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          className="action"
          onClick={(e) => {
            e.preventDefault();

            setLoading(true);
            setResults(second);

            setTimeout(() => {
              setLoading(false);
            }, 500);
          }}
        >
          Провести отбор
        </button>
      </div>
      {loading ? (
        <div className="loadingBox">
          <img src={loadingIcon} alt="Загрузка" className="loading" />
        </div>
      ) : (
        <table className="results">
          <thead>
            <th>Фамилия</th>
            <th>Средний балл</th>
            <th>Группа</th>
          </thead>
          <tbody>
            {results.map((row, idx) => (
              <tr key={row.toString() + idx}>
                <td>{row.sername}</td>
                <td>{row.rate}</td>
                <td>{row.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="pagination">
        <button className="tab bordered">1</button>
        <button className="tab bordered">2</button>
        <button className="tab bordered">3</button>
      </div>
    </div>
  );
}

export default App;

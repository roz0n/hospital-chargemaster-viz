import "./App.css";
import React, { useEffect, useState } from "react";
import Radium from "radium";

import Sidebar from "./components/Sidebar";
import { ProductProps } from "./components/ProductList/ProductList.types";

const sampleProducts: ProductProps[] = [
  {
    label: "Medicine 20MG",
    price: 90000,
    hospitalId: 12
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12
  }
];

const App: React.FC = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("/api/hospitals").then(data => data.json());

        if (data.success) {
          setData(data);
        } else {
          throw new Error("Error");
        }
      } catch (error) {
        setError(error.message || false);
      }
    }

    if (!data) {
      fetchData();
    }
  }, [data, setData]);

  function handleSidebarToggle() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <div>
      {error ? <div>{error}</div> : (
        <div>
          <Sidebar
            productList={sampleProducts}
            isVisible={sidebarVisible}
            toggleVisibility={handleSidebarToggle}
          />
          Is sidebar open: {sidebarVisible.toString()}
          <br />
          <button onClick={handleSidebarToggle}>Open sidebar</button>
        </div>
      )}
    </div>
  );
}

export default Radium(App);

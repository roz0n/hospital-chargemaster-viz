import "./App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import HospitalMap from "./components/HospitalMap";

const sampleProducts = [
  {
    label: "Medicine 20MG",
    price: 90000,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
];

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("/api/all-hospitals").then((data) =>
          data.json()
        );

        if (data.success) {
          const geoData = data?.data?.map((item) => item.geo_data);
          setData(geoData);
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

  return (
    <main>
      {error ? (
        <div>{error}</div>
      ) : (
        <Layout>
          <HospitalMap geoData={data} />
          <Sidebar productList={sampleProducts} />
        </Layout>
      )}
    </main>
  );
};

const Layout = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 300px",
  width: `100%`,
  overflowX: "hidden",
});

export default App;

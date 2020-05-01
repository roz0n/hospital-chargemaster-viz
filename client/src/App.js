import "./App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import HospitalMap from "./components/HospitalMap";

const App = () => {
  const [data, setData] = useState(null);
  const [hospitalData, setHospitalData] = useState(null);
  const [activeHospitalId, setActiveHospitalId] = useState(null);
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
          setHospitalData(data?.data);
        } else {
          throw new Error("Error");
        }
      } catch (error) {
        setError(error.message || false);
      }
    }

    if (!data) fetchData();
  }, [data, setData]);

  const activeHospitalData = hospitalData?.filter(
    (item) => item?.geo_data?.place_id === activeHospitalId
  )[0];

  return (
    <main>
      {error ? (
        <div>{error}</div>
      ) : (
        <Layout>
          <HospitalMap
            geoData={data}
            setActiveHospital={setActiveHospitalId}
            activeHospitalId={activeHospitalId}
          />
          <Sidebar
            activeHospitalData={activeHospitalData}
            activeHospital={activeHospitalId}
          />
        </Layout>
      )}
    </main>
  );
};

const Layout = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 300px",
  width: `100%`,
  overflow: "hidden",
});

export default App;

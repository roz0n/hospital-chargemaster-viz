import "./App.css";
import React, { useEffect, useState } from "react";
import Radium from "radium";
import { slideInRight } from "react-animations";
import Sidebar from "./components/Sidebar";

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
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // This gets the list of hispitals for the markers
        const data = await fetch("/api/hospitals").then(data => data.json());

        if (data.success) {
          console.log("HOSPITAL DATA", data);
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
    <main>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {sidebarVisible && (
            <section style={styles.slideIn}>
              <Sidebar
                productList={sampleProducts}
                isVisible={sidebarVisible}
                toggleVisibility={handleSidebarToggle}
              />
            </section>
          )}

          <section>
            {
              // Map goes here
            }
            Is sidebar open: {sidebarVisible.toString()}
            <br />
            <button onClick={handleSidebarToggle}>Open sidebar</button>
          </section>
        </div>
      )}
    </main>
  );
};

const styles = {
  slideIn: {
    animation: "x .25s",
    animationName: Radium.keyframes(slideInRight, "slideInRight"),
  },
};

export default Radium(App);

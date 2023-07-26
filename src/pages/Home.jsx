import React, { useContext } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Text from "../components/Layout/Text";
import ThemeContext from "../contexts/Context";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <div style={{ padding: "30px 15px", textAlign: "center" }}>
        <Text
          text={`Turn ${theme === "dark-theme" ? "on" : "off"} the lights`}
        />
      </div>
    </>
  );
};

export default Home;

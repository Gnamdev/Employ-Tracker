import Footer from "./Footer";
import Header from "./Header";

const Base = ({ title = "Page", childern }) => {
  return (
    <div>
      <Header />

      {childern}

      <Footer />
    </div>
  );
};

export default Base;

import { useState } from "react";
import { motion } from "framer-motion";
import menubg from "../assets/image/menubg.jpg";
import items from "../assets/data/menuitems";
import ProductItem from "../components/ProductItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [filteredItems,setFilteredItems] = useState(items)
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setFilteredItems(items.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    }));
  }

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-center"
      id="menu"
      style={{
        backgroundImage: `url(${menubg})`,
      }}
    >
      {/* Category Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex p-1 relative flex-col items-center gap-10 mt-8"
      >
        <button
          onClick={() => navigate("/")}
          className="inline-flex group text-[#443] flex-row gap-1 px-6 py-3 rounded-full hover:bg-white/50 items-center shadow-lg duration-300 transition-all"
        >
          <FontAwesomeIcon
            icon={faCircleLeft}
            className="group-hover:scale-105 duration-200"
          />
          <span className="font-semibold">Home</span>
        </button>
        <div className=" border-2 p-1 rounded-2xl flex items-center flex-row">
          <FontAwesomeIcon icon={faCookie} size="lg" className="text-[#aa9b73]"/>
          <input
            className=" w-52 md:w-72 p-2 focus:outline-none font-medium"
            placeholder="..brownies"
            onChange={handleSearch}
          />
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="w-full mt-5 px-4"
      >
        <div className="w-full mt-20 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {filteredItems.map((item) => (
            <div key={item.id} className="w-full">
              <ProductItem product={item} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;

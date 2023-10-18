import React from "react";
import Header from "./others/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sandalwood from "./sandalwood/Sandalwood";
import Home from "./home/Home";
import Technology from "./technology/Technology";
import Jobs from "./jobs/Jobs";
import Nature from "./nature/Nature";
import Food from "./food/Food";
import PageNotFound from "./others/PageNotFound";
import { CategoryProvider } from "./context/Context";
import ViewData from "./others/ViewData";
const AllComponents = () => {
  return (
    <div>
      <Router>
        <Header />
        <CategoryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sandalwood" element={<Sandalwood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/about" element={<Food />} />
          <Route path="/sandalwood/:id" element={<ViewData/>}/>
          <Route path="/technology/:id" element={<ViewData/>}/>
          <Route path="/jobs/:id" element={<ViewData/>}/>
          <Route path="/nature/:id" element={<ViewData/>}/>
        </Routes>
        </CategoryProvider>
      </Router>
    </div>
  );
};

export default AllComponents;
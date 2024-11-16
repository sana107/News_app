import React, { useContext, useEffect } from "react";
import WeatherCard from "../Components/WeatherCard";
import NewsCard from "../Components/NewsCard";
import Slider from "../Components/Slider";
import ThemeContext from "../Provider/Theme/ThemeContext";
import NewsContext from "../Provider/News/NewsContext";
import { fetchNews } from "../Provider/News/NewsAction";
// import { toast } from "react-toastify";

const Home = () => {
  const { dark } = useContext(ThemeContext);
  const { newsData, dispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("indore");
  }, []);

  // if (!newsData || newsData?.length === 0) {
  //   toast.error("Kindly Search Valid News!!");
  //   getNews("Indore");
  // }

  return (
    
    <div
      className={
        dark ? "container-fluid p-3 bg-secondary" : "container-fluid p-3 "
      }
    >

      <div className="row g-3 my-3 mx-3">
        <div className="col-sm-4 col-md-8 ">
          <Slider />

          
        </div>

        <WeatherCard />

        <marquee><h1 className="display-6 my-2">daily quotes</h1></marquee>
        
      </div>

      <div className="row g-3 my-3 mx-3">
        <div className="col-sm-12 col-md-12">
          {!newsData ? (
            <h1 className="text-center text-secondary">Loading..</h1>
          ) : (
            newsData.map((news, index) => <NewsCard key={index} news={news} />)
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Home;

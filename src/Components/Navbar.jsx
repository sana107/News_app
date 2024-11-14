import React, { useContext, useState } from "react";
import TodaysDate from "./TodaysDate";
import ThemeContext from "../Provider/Theme/ThemeContext";
import NewsContext from "../Provider/News/NewsContext";
import { fetchNews } from "../Provider/News/NewsAction";

const Navbar = () => {
  const { dark } = useContext(ThemeContext);
  const { dispatch } = useContext(NewsContext);

  const [topic, setTopic] = useState("");

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getNews(topic);
    
  };
  return (
    <>
      <nav>
        <div>
          <TodaysDate />
        </div>
        <div
          id="navbar_1"
          className={
            dark
              ? "navbar navbar-light  bg-dark "
              : "navbar navbar-light  bg-light text-light "
          }
        >
          <a
            id="kaltak"
            className={dark ? "navbar-brand text-light " : "navbar-brand"}
            href="#"
          >
            KAL TAK
          </a>
          <span className="span_2">
            <form className=" w-100 d-flex px-2" onSubmit={handleSearch}>
              <input
                className="form-control form-control-md rounded-0 w-75 me-2"
                type="text"
                placeholder="Search..."
                aria-label=".form-control-lg example"
                onChange={e => setTopic(e.target.value)}
                value={topic}
              />
              <button
                className="btn btn-outline-info my-2 my-sm-0 rounded-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </span>
        </div>
        <div
          id="list-cate"
          className={
            dark
              ? "navbar navbar-light bg-light d-flex align-items-center justify-content-center"
              : "navbar navbar-light bg-light d-flex align-items-center justify-content-center"
          }
        >
          <a className="navbar-brand" href="#">
            Home
          </a>
          <a className="navbar-brand" href="#" onClick={() => getNews("Indian sports")}>
            Sports
          </a>
          <a className="navbar-brand" href="#"  onClick={() => getNews("Indian Politics")}>
            Politics
          </a>
          <a className="navbar-brand" href="#" onClick={() => getNews("Indian Business")}>
            Business
          </a>
          <a className="navbar-brand" href="#" onClick={() => getNews("International")}>
            International
          </a>
          <a className="navbar-brand" href="#"onClick={() => getNews("Indian Entertainment")}>
            Entertainment
          </a>
          <a className="navbar-brand" href="#" onClick={() => getNews("Culture")}>
            Culture
          </a>

          <a className="navbar-brand" href="#" onClick={() => getNews("Art")}>
            Art
          </a>
          <a className="navbar-brand" href="#" onClick={() => getNews("Tech")}>
            Tech
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

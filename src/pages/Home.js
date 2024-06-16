import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from './Card.js'
import { getHomeData, getHomeCat } from "./store/slices/getHomeSlice.js";
import Loader from "./Loader.js";

const Home = ({ increament }) => {
  const data = useSelector((state) => state.getHomeData.product);
  const loadingData = useSelector((state) => state.getHomeData.loading);
  const cat = useSelector((state) => state.getHomeCat.category);
  const alldata = useSelector((state) => state.getHomeData.copyProduct);
  const [newData, setNewData] = useState([]);
  const [filter, setFilter] = useState({ categories: "All", orderList: "select", searchKey: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData());
    dispatch(getHomeCat());
  }, [dispatch]);

  useEffect(() => {
    setNewData(alldata);
  }, [alldata]);

  const handleFilterChange = (e) => {
    const newCategory = e.target.value;
    setFilter({ ...filter, categories: newCategory });
    dispatch(getHomeData());
  };

  const handleSearchChange = (e) => {
    const newSearchKey = e.target.value;
    setFilter({ ...filter, searchKey: newSearchKey });
    dispatch(getHomeCat());
  };

  const handleOrderChange = (e) => {
    const newOrderList = e.target.value;
    setFilter({ ...filter, orderList: newOrderList });
    dispatch(getHomeData());
  };

  useEffect(() => {
    let filteredData = [...data];
    if (filter.categories!=='All') {
      filteredData = filteredData.filter((item) => item.category === filter.categories);
    }
    if (filter.searchKey!=='') {
      filteredData = filteredData.filter((item) => item.title.toLowerCase().includes(filter.searchKey.toLowerCase()));
    }
    if (filter.orderList==='Low') {
      filteredData.sort((a, b) => a.price - b.price);
    } 
    else if (filter.orderList==='High') {
      filteredData.sort((a, b) => b.price - a.price);
    }
    setNewData(filteredData);
  }, [filter, data]);

  const resetFilter = () => {
    setFilter({categories:"All",orderList:"select",searchKey:""})
  }

  return (
    <>
      {loadingData && <Loader />}
      <h2>Home Page</h2>
      <form className="details-wrapper"> 
        <select value={filter.categories} onChange={handleFilterChange}>
          <option value="All">All</option>
          {cat.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <input className="search" type="text" value={filter.searchKey} onChange={handleSearchChange} />
        <span className="sorting-box">
          <select value={filter.orderList} onChange={handleOrderChange}>
            <option value="select">select</option>
            <option value="High">High To Low</option>
            <option value="Low">Low To High</option>
          </select>
        </span>
        <button className="btn" type="reset" onClick={resetFilter}>
          Reset
        </button>
      </form>
      {newData.length > 0 ? (
        <div className="box">
          {newData.map((item, id) => (
            <div className="details-wrap">
              <Card key={id} data={item} increament={increament}/>
            </div>
          ))}
        </div>
      ) : (
        <h2>No data found</h2>
      )}
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./App.css"; // Assuming you have an App.css file for styles
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { selectData } from "./appSlice";

function Grid() {
    const state = useSelector(selectData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page

    // Calculate the indexes of items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = state.data?.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log(state);
    return (
        <>
            {currentItems?.length > 0 && (
                <div className="card-container mt-5">
                    {currentItems.map((item, index) => (
                        <div className="card" key={index} style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <img
                                className="card-img-top"
                                src={item.url}
                                alt="Card image cap"
                                style={{ maxHeight: '280px', objectFit: 'cover' }}
                            />
                            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <p className="left">{item.name} / {item?.username}</p>
                                <a href={item?.link} download={item?.link}>Download</a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* Pagination controls */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <nav className="text-center">
                    <ul className="pagination text-center">
                        {state.data?.length > 0 && (
                            Array.from({ length: Math.ceil(state.data.length / itemsPerPage) }).map((_, index) => (
                                <li key={index} className="page-item">
                                    <button onClick={() => paginate(index + 1)} className="page-link">{index + 1}</button>
                                </li>
                            ))
                        )}
                    </ul>
                </nav>
            </div>

        </>
    );
}

export default Grid;

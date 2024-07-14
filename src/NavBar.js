import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllImages } from './appSlice';
import logoImage from './Designer.png'
const NavBar = ({ state }) => {
    const dispatch = useDispatch();
    const [dataObj, setDataObj] = useState({
        query: ''
    });

    const getImages = () => {
        const params = {
            client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
            page: 10,
            per_page: 200,
            query: dataObj.query || "motivational thoughts"
        };

        const queryString = Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join('&');

        const url = dataObj.query ? `https://api.unsplash.com/search/photos?${queryString}` : `https://api.unsplash.com/photos?${queryString}`;

        dispatch(getAllImages(url)).then((resp) => {
        })

    };

    const onClick = (event) => {
        event.preventDefault();
        getImages();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataObj({ ...dataObj, [name]: value });
    };

    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <div className="text-center mt-3">
                <img height={'150px'} style={{borderRadius:'50%'}} src={logoImage} alt="Logo" />
            </div>
            <div className="d-flex justify-content-center text-center mt-3">
                <form className="form-inline text-center" onSubmit={onClick} style={{minWidth:'350px' , maxWidth:'350px'}}>
                    <input
                        className="form-control mr-sm-2 "
                        name="query"
                        onChange={handleChange}
                        placeholder='search...'
                        value={dataObj.query || ""}
                    />
                    <button className="btn btn-outline-success  my-sm-0">
                        Search
                    </button>
                </form>
            </div>

        </>
    );
};

export default NavBar;

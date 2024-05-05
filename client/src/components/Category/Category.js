import './Category.css';
import ItemCard from '../Card/ItemCard/ItemCard';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import axios from 'axios';
import ReactLoading from 'react-loading';

const Category = ({ name }) => {
    const [show, setShow] = useState('All');
    const [filter, setFilter] = useState('Latest');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState('Latest');

    useEffect(() => {
        axios.get(`https://shop-backend-nine.vercel.app/api/items?category=${name.toLowerCase()}`)
            .then(res => {
                setItems(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [name]);

    const handleShowChange = (event) => {
        setShow(event.target.value);
    };

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilter(value);
        setSelectedFilter(value);
    };

    // Filter items based on the selected category and filter
    const filteredItems = items.filter(item => {
        if (show !== 'All' && item.category !== show) return false;

        if (selectedFilter === 'Latest') {
            return true; // No additional filtering required for 'Latest'
        } else if (selectedFilter === 'suit') {
            return item.type === 'suit';
        } else if (selectedFilter === 'shoes') {
            return item.type === 'shoes';
        } else if (selectedFilter === 'tshirt') {
            return item.type === 'tshirt';
        } else if (selectedFilter === 'jeans') {
            return item.type === 'jeans';
        } else if (selectedFilter === 'short') {
            return item.type === 'short';
        } else if (selectedFilter === 'jacket') {
            return item.type === 'jacket';
        } else if (selectedFilter === 'dress') {
            return item.type === 'dress';
        } else if (selectedFilter === 'bag') {
            return item.type === 'bag';
        } else if (selectedFilter === 'hoodie') {
            return item.type === 'hoodie';
        }
        // Add more conditions for other filter options if needed

        return true; // Default to true if no specific condition matched
    });

    return (
        <div className="category__container">
            <div className="category">
                <div className="category__header__container">
                    <div className="category__header__big">
                        <div className="category__header">
                            <h2>{name}</h2>
                        </div>
                        <div className="category__header__line"></div>
                    </div>
                    <div className="category__sort">
                        <div className="show__filter">
                            <Box sx={{ minWidth: 100 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>Show</InputLabel>
                                    <Select
                                        value={show}
                                        label="Show"
                                        onChange={handleShowChange}
                                    >
                                        <MenuItem value={'All'}>All</MenuItem>
                                        <MenuItem value={'men'}>Men</MenuItem>
                                        <MenuItem value={'women'}>Women</MenuItem>
                                        <MenuItem value={'kids'}>Kids</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="filter__by">
                            <div className="show__filter">
                                <Box sx={{ width: 120 }}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel>Filter by</InputLabel>
                                        <Select
                                            value={filter}
                                            label="Filter"
                                            onChange={handleFilterChange}
                                        >
                                            <MenuItem value={'Latest'}>Latest</MenuItem>
                                            <MenuItem value={'suit'}>Suit</MenuItem>
                                            <MenuItem value={'shoes'}>Shoes</MenuItem>
                                            <MenuItem value={'tshirt'}>Tshirts</MenuItem>
                                            <MenuItem value={'jeans'}>Jeans</MenuItem>
                                            <MenuItem value={'short'}>Shorts</MenuItem>
                                            <MenuItem value={'jacket'}>Jackets</MenuItem>
                                            <MenuItem value={'dress'}>Dresses</MenuItem>
                                            <MenuItem value={'bag'}>Bags</MenuItem>
                                            <MenuItem value={'hoodie'}>Hoodies</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category__card__container">
                    {loading ? (
                        <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='container h-100 w-10 justify-self-center align-self-center m-auto' />
                    ) : (
                        <div className="category__product__card">
                            {filteredItems.map((data, index) => (
                                <ItemCard key={index} item={data} />
                            ))}
                            <div className="show__more__action">
                                <Button variant='outlined' sx={[{ width: '200px', height: '50px', borderRadius: '20px', fontWeight: '700', backgroundColor: '#FFE26E', borderColor: '#FFE26E', color: 'black' }, { '&:hover': { borderColor: '#FFE26E', backgroundColor: "none" } }]}>Show more</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Category;

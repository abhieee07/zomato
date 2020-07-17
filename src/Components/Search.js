import React, { useRef, useEffect } from 'react'
import classes from './Search.module.css'
import zomato from '../Assest/zomato.jpg'
const Search = (props) => {
    const searchValue = useRef("")

    useEffect(() => {
        searchValue.current.focus()
    }, [])
    const formSubmitted = e => {
        e.preventDefault();
    }
    const nameChanged = () => {
        props.setCusine(searchValue.current.value)
    }
    return (
        <form className={classes.search} onSubmit={formSubmitted}>
            <img src={zomato} alt="zomatobackground" />
            <h2>Discover the best food & drinks in Your Area</h2>
            <input className={classes.input}
                type="text"
                placeholder="search for your favourite cuisine"
                onChange={nameChanged}
                ref={searchValue}
            />
            <span className={classes.button}><button className={classes.icon}><i className="fa fa-search" aria-hidden="true"></i></button></span>
        </form>
    )
}

export default Search

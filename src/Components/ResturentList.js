import React from 'react'
import classes from './ResturentList.module.css'
import Restuarent from './Resturent'

const ResturentList = (props) => {
    if (props.loading) {
        return (
            <h2 >Loading...</h2>
        )
    }
    else if (props.restaurant.length < 1) {
        return (
            <h2 >Ooops!!! No Restaurents found </h2>
        )
    }
    return (
        <section className={classes.resturantList}>
            <h2>Restaurents Nearby You</h2>
            <div >
                {props.restaurant.map(item => (
                    <Restuarent key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default ResturentList

import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Resturent.module.css'

const Resturent = (props) => {
    return (
        <div className={classes.Resturent}>
            <div className={classes.ResturentCard}>
                <span className={classes.imageContainer}>
                    <img src={props.logo_image} />
                </span>
                <span className={classes.infoContainer}>
                    <h3 className={classes.title}>{props.name}</h3>
                    <section className={classes.rating}>
                        <span className={classes.box}> {props.userRating} <i className="fa fa-star" aria-hidden="true"></i> </span>
                        <span className={classes.review}>({props.votes} Reviews)</span>
                    </section>
                    <div className={classes.cuisines}>
                        {props.cuisines}
                    </div>
                    <div className={classes.costfortwo}>
                        Costs Rs. {props.average_cost}  for two
                    </div>
                    <div className={classes.timing}>
                        Timings: {props.timing}
                    </div>
                    <div className={classes.timing}>
                        Address: {props.address}
                    </div>
                    <div className={classes.contact}>
                        Phone Number: {props.conatct}
                    </div>
                </span>
            </div>
            <div className={classes.viewCard}>

                <span className={classes.btn}>
                    <Link to={`/detail/${props.id}`} >View Restuarent  <span className={classes.icon}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                    </Link>
                </span>
            </div>
        </div >
    )
}

export default Resturent

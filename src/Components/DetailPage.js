import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import classes from './DetailPage.module.css'
// import { WrappedMap } from './Googlemap'

export default function DetailPage() {
    const { id } = useParams()
    const [restuarent, setRestuarent] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`,
            headers: {
                "user-key": "f95cd5d92105cac380eb21dea86bbe16",
                "content-type": "application/json"
            }
        })
            .then(response => {
                setLoading(false)
                console.log(response.data)
                if (response.data) {
                    const resData = {
                        average_cost: response.data.average_cost_for_two,
                        cuisines: response.data.cuisines,
                        featured_image: response.data.featured_image,
                        address: response.data.location.address,
                        city: response.data.location.city,
                        locality: response.data.location.locality_verbose,
                        name: response.data.name,
                        number: response.data.phone_numbers,
                        timings: response.data.timings,
                        user_rating: response.data.user_rating.aggregate_rating,
                        votes: response.data.user_rating.votes,
                        type: response.data.establishment[0],
                        highlights: response.data.highlights,
                        lat: response.data.location.latitude,
                        lng: response.data.location.longitude,

                    }
                    setRestuarent(resData)
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }, [id])
    if (loading) {
        return <h2 >Loading...</h2>
    }
    if (!restuarent) {
        return <h2 >No Restuarents found</h2>
    }
    else {
        console.log(restuarent.highlights)
        return (
            <div className={classes.detail}>
                <Link to="/"><img className={classes.logo} src={'https://b.zmtcdn.com/data/bdddded729eec1881d992117920afa5f1553759845.png'} alt="zomato" /></Link>
                <hr style={{ border: "0.2px solid rgba(232, 232, 232,0.6)" }} />
                <div className={classes.content}>
                    <img className={classes.bannerImg} src={restuarent.featured_image} alt="Banner" />
                    <div className={classes.titleContainer}>
                        <h1 className={classes.title}>{restuarent.name}</h1>
                        <span className={classes.rating}>
                            <span className={classes.box}> {restuarent.user_rating} <i className="fa fa-star" aria-hidden="true"></i> </span>
                            <span className={classes.review}>({restuarent.votes} Reviews)</span>
                        </span>
                    </div>
                    <p className={classes.type} >{restuarent.type} : {restuarent.cuisines}</p>
                    <h5 className={classes.locality}>{restuarent.locality}</h5>
                    <div className={classes.time}>
                        <span className={classes.timing}>Timing -  </span>
                        <span style={{ color: "#828282" }}>{restuarent.timings}</span>
                    </div>
                    <div className={classes.cont}>
                        <span className={classes.Contact}>Contact  -</span>
                        <span style={{ color: "#828282" }}>{restuarent.number}</span>
                    </div>
                    {/* <div style={{ width: "300px", height: "300px" }}><WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="AIzaSyCz8fweSU4MIVWijPrbxwP-5IWYrDlsdcU"`}
                        loadingElement={<div style={{ height: `300px` }} />}
                        containerElement={<div style={{ height: `300px` }} />}
                        mapElement={<div style={{ height: `300px` }} />}
                    /></div> */}

                    <h5 className={classes.header}>Address</h5>
                    <p className={classes.cuisines}>{restuarent.address}.</p>
                    <h5 className={classes.header}>Menu</h5>
                    <span className={classes.menu}><img src={"https://b.zmtcdn.com/data/menus/165/3100165/13e2670d65c864fee4b8a6f6ad098469.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"} alt="menu" /></span>
                    <h5 className={classes.header}>Cusines</h5>
                    <p className={classes.cuisines}>{restuarent.cuisines}</p>
                    <h5 className={classes.header}>Average cost</h5>
                    <p className={classes.cuisines}>Rs.{restuarent.average_cost} for two people (approx)</p>
                    <h5 className={classes.header}>More Info</h5>
                    <p className={classes.cuisines}>{restuarent.highlights.map((item, index) => (
                        <span key={index} className={classes.Moreinfo}><i className="fa fa-check-circle-o" aria-hidden="true"></i> {item}</span>
                    ))}</p>

                </div>

            </div>
        )
    }
}













// <div className={classes.content}>
// <span className={classes.bannerImg}><img src={restuarent.featured_image} alt="Banner" /></span>
// <div className={classes.titleContainer}>
//     <h1 className={classes.title}>{restuarent.name}</h1>
//     <span className={classes.rating}>
//         <span className={classes.box}> {restuarent.user_rating} <i className="fa fa-star" aria-hidden="true"></i> </span>
//         <span className={classes.review}>({restuarent.votes} Reviews)</span>
//     </span>
// </div>
// <p>{restuarent.type} : {restuarent.cuisines}</p>
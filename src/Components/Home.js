import React, { useState, useEffect } from 'react'
import classes from './Home.module.css'
import axios from 'axios'
import Search from './Search'
import RestaurantList from './ResturentList'
const Home = () => {
    const [cusine, setCusine] = useState("shawarma")
    const [loading, setLoading] = useState(false)
    const [restaurant, setRestaurant] = useState([])


    useEffect(() => {
        async function getResturents() {
            setLoading(true)
            var lat, long
            navigator.geolocation.getCurrentPosition((position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                // console.log(lat, long)

                axios({
                    method: "GET",
                    url: `https://developers.zomato.com/api/v2.1/search?q=${cusine}&start=0&count=25&&lat=${lat}&lon=${long}`,
                    headers: {
                        "user-key": "f95cd5d92105cac380eb21dea86bbe16",
                        // "content-type": "application/json"
                    }
                })
                    .then(response => {
                        if (response.data) {
                            setLoading(false)
                            const resData = response.data.restaurants.map(item => {
                                console.log(item.restaurant)
                                return {
                                    name: item.restaurant.name,
                                    timing: item.restaurant.timings,
                                    average_cost: item.restaurant.average_cost_for_two,
                                    id: item.restaurant.R.res_id,
                                    large_image: item.restaurant.featured_image,
                                    logo_image: item.restaurant.thumb,
                                    userRating: item.restaurant.user_rating.aggregate_rating,
                                    userRatingColor: item.restaurant.user_rating.rating_color,
                                    votes: item.restaurant.user_rating.votes,
                                    cuisines: item.restaurant.cuisines,
                                    address: item.restaurant.location.address,
                                    conatct: item.restaurant.phone_numbers
                                }
                            })
                            setRestaurant(resData)
                        }
                        else {
                            setLoading(false)
                            setRestaurant([])
                        }
                    })
            })

        }
        getResturents()
    }, [cusine])
    return (
        <main className={classes.home}>
            <Search setCusine={setCusine} />
            <RestaurantList restaurant={restaurant} loading={loading} />
        </main>
    )
}

export default Home

import Suggestions from "../Components/Home/suggestion"
import { useSelector } from "react-redux"
import { habitsList } from "../app/reducers/habitReducer"
import { Button } from "react-bootstrap"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"

export const Habits = () => {
    const habitList = useSelector(habitsList)
    const [name, setName] = useState();

    const navigate = useNavigate();

    const track =  (habit, url, id) => {
        setName(habit);
        navigate(`/habits/weekly/${id}`);
    }

    return (
        <div className="homepage">
            <h1>
                Details Page
            </h1>

            <div className='display'>
                <div className='habits'>
                    <h2>Your Habits</h2>
                    <Suggestions habitList={habitList} habit = {track} />
                    <Link to={'/'}>
                        <Button>Add New Habit</Button>
                    </Link>
                </div>
                <Outlet context={(name)}/>
            </div>
        </div>
    )
}
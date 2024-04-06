import AddHabit from "../Components/Habits/addHabit"
import Suggestions from "../Components/Home/suggestion"
import { useSelector } from "react-redux"
import { habitsList, habitSelector } from "../app/reducers/habitReducer"

export const Habits = ({ newHabit }) => {

    const habitList = useSelector(habitsList)
    const habit = useSelector(habitSelector)

    return (
        <div className="homepage">
            <h1>
                Details Page
            </h1>
            {console.log(habitList)}
            <div className='display'>
                <Suggestions habitList={habitList} />
            </div>
        </div>
    )
}
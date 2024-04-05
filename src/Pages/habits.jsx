// import AddHabit from "../Components/Habits/addHabit"
// import Suggestions from "../Components/Home/suggestion"
// import { useSelector } from "react-redux"
// import {habitsSelector} from "../app/reducers/habitReducer"

// export const Habits = ({ toggle, newHabit }) => {

//     const habitList = useSelector(habitsSelector)
//     return (
//         <div className="homepage">
//             <h1>
//                 Details Page
//             </h1>
//             <div className='display'>
//                 <Suggestions habitList= {habitList}/>

//                 {/* Accessing the add habit component */}
//                 <AddHabit
//                     show={newHabit}
//                     onHide={toggle}
//                 />
//             </div>
//         </div>
//     )
// }
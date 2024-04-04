import Getimage from "../Components/Home/motivationCarousal"
import HabitsContainer from "../Components/Home/tasks"
import { DisplayImage } from "../Assets/data/displayImages"

export const Home = () => {
    return (
        <div className="homepage">
            <h1>
                Home Page
            </h1>
            <div className='display'>
                <Getimage images={DisplayImage} />
                <HabitsContainer />
            </div>
        </div>
    )
}
import Carousel from 'react-bootstrap/Carousel';
import styles from './home.module.css'

function Getimage({ images }) {
    return (
        <Carousel indicators={false} controls={false} className={styles.carousel}>
            {images.map((img,index) => {
                return (
                    <Carousel.Item key={index} interval={5000}>
                        <img className={`d-block w-100 ${styles.image}`} src={img.url} alt={`Motivation: ${index}`} />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default Getimage;
import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.group1}>
                    <h2 className={styles.title}>About This Project</h2>
                    <p className={styles.text}>I really enjoy watching movies, dramas, and animations on Netflix. 
                        Because of this interest, I decided to create a movie information site for my React routing project. 
                        I wanted to build a space where I could explore the kinds of content I love.
                    </p>
                    <h4 className={styles.subTitle}>This project consists of 6 main pages</h4>
                    <p className={styles.text}>Home: The main dashboard showing the most popular movies right now.</p>
                    <p className={styles.text}>Category: A menu page where you can explore various movie genres.</p>
                    <p className={styles.text}>Best: A curated list of top-rated movies of all time.</p>
                    <p className={styles.text}>About: A page explaining the inspiration and technology behind this project.</p>
                    <p className={styles.text}>Category Detail: A genre-specific page that lists movies based on your selection.</p>
                    <p className={styles.text}>Movie Information: The final destination where you can see a movie's poster, title, and detailed story.</p>
                </div>
                <div className={styles.group2}>
                    <h2 className={styles.title}>Design Concept</h2>
                    <p className={styles.text}>used a dark background to make the movie posters stand out visually, just like the Netflix interface</p>
                    <p className={styles.text}>Instead of adding complex features, I focused on a simple design. My goal was to make it easy for users to choose genres and check movie details intuitively.</p>
                </div>
                <div className={styles.group3}>
                    <h2 className={styles.title}>Tech Stack & Tools</h2>
                    <p className={styles.text}>React Router <br /> TMDB API <br />Hooks (useState, useEffect, useParams, useNavigate)</p>
                </div>
            </div>
        </div>
    )
}

export default About
function Card(){
    const profilePicture = "https://thoughtsfromonewhothinkstoomuch.wordpress.com/wp-content/uploads/2011/12/200px-batman_the_animated_series_logo.jpg";

    return(
     <div className="card">
            <img className="card-image" src={profilePicture} alt="batman.img" />
            <h2 className="card-title">I am Batman!!!</h2>
            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
     </div>
    );
}

export default Card
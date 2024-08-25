function ProfilePicture(){
    const imageUrl = ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jubnJx1H6QUWlcN6YPAT1wVc02sU_KCa4g&s'
    // the picture does not appear because i havent downloaded it
    const handleClick = (e) => e.target.style.display = 'none';

    return (<img onClick={(e) => handleClick(e)} src={imageUrl} alt = "asd"> </img>);


}

export default ProfilePicture;

import Card from "./Card";
import Slider from "./Slider";

function Home() {
    const myStyle = {
        backgroundImage:
            "url('https://wallpaperaccess.com/full/4293117.jpg')",
        height: '130vh',
        marginTop: '-60px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <>
            <div style={myStyle} >

            </div>

            <div className="container-fluid d-flex justify-content-evenly" style={{backgroundColor:"rgb(194,178,128)"}}>

                 <Card />
               

            </div>

            <Slider />

        </>



    )
};

export default Home;
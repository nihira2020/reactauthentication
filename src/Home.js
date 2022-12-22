import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    useEffect(() => {
     let username=sessionStorage.getItem('username');
     if(username==='' || username ===null){
        usenavigate('/login');
     }
    }, []);

    return (
        <div>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link style={{float:'right'}} to={'/login'}>Logout</Link>
            </div>
            <h1 className="text-center">Welcome to Nihira Techiees</h1>
        </div>
    );
}

export default Home;
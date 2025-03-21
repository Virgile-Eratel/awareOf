import { useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    return (
        <div>
            <h1>Home a toi de jouer Sami</h1>
            <button onClick={() => navigate('/game')}>Game</button>
        </div>
    )
}

export default Home
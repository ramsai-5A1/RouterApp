import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/support');
    }

    return (
        <div>
            <div>
                About page
            </div>
            <button onClick={clickHandler}>Move to Support Page</button>
        </div>
    );
}
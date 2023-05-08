import { useNavigate } from "react-router-dom";

export const Labs = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/about');
    }

    return (
        <div>
            <div>
                Labs Page
            </div>
            <button onClick={clickHandler}>Move to About Page</button>
        </div>
    );
}
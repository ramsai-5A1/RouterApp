import { useNavigate } from "react-router-dom";

export const Support = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/labs');
    }

    const backHandler = () => {
        navigate(-1);
    }

    return (
        <div>
            <div>
                Support page
            </div>
            <button onClick={clickHandler}>Move to Labs Page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
    );
}
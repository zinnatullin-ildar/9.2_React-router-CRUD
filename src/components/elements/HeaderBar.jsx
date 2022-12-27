import { useNavigate } from "react-router-dom";

function HeaderBar(props) {
    const navigate = useNavigate();
    const onHomeClick = () => {
        navigate("/");
    }

    return (
        <div className={'header-bar'}>
            <button onClick={onHomeClick}>Home</button>
        </div>
    )
}

export default HeaderBar;

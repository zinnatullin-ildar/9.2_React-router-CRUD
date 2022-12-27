import { Link } from "react-router-dom";

function Toolbar(props) {
    return (
        <div className={'toolbar'}>
            <Link to={'posts/new'}>
                <button>Создать пост</button>
            </Link>
        </div>
    )
}

export default Toolbar;

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function PostItem(props) {
    const { created, content, id } = props;
    const navigate = useNavigate();

    const onPostClick = (e) => {
        navigate(`posts/${id}`);
    }

    return (
        <div className={'post-card'} onClick={onPostClick}>
            <div className={'post-card-date'}>Created: {new Date(created).toLocaleDateString()}</div>
            <div className={'post-card-text'}>Message: {content}</div>
            <div className={'post-card-id'}>ID: {id}</div>
        </div>
    )
}

PostItem.propTypes = {
    created: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default PostItem;

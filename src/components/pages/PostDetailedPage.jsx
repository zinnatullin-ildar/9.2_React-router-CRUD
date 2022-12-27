import { useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";
import useFetchData from '../hooks/useFetchData';

function PostDetailedPage(props) {
    const params = useParams();
    const [{ data }] = useFetchData(process.env.REACT_APP_HOST_URL + 'posts', null);
    const navigate = useNavigate();

    const onDeleteClick = async () => {
        try {
            await fetch(`${process.env.REACT_APP_HOST_URL}posts/${params.id}`, { method: 'DELETE' });
            navigate("/");
        } catch (e) {
            console.log(e.message);
        }
    }
    const onEditClick = () => {
        navigate(`/posts/edit/${params.id}`);
    }

    return (
        <>
            <h2>Просмотр</h2>
            {data.filter(obj => obj.id === Number(params.id)).map(data =>
                <div key={v4()} className={'post-detailed-page'}>
                    <div className={'post-detailed-date'}>{data.created}</div>
                    <div className={'post-detailed-text'}>{data.content}</div>
                    <div className={'post-detailed-id'}>{data.id}</div>
                    <div className={'post-detailed-controls'}>
                        <button onClick={onEditClick}>Edit</button>
                        <button onClick={onDeleteClick}>Delete</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default PostDetailedPage;

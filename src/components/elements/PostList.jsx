import { v4 } from "uuid";
import useFetchData from '../hooks/useFetchData';
import PostItem from './PostItem';

function PostList(props) {
    const [{ data }] = useFetchData(process.env.REACT_APP_HOST_URL + 'posts', null);

    return (
        <div className={'post-list'}>
            {data.map(item => <PostItem key={v4()} {...item} />)}
        </div>
    )
}

export default PostList;

import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function CreatePage(props) {
    let navigate = useNavigate();
    const textareaRef = useRef();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const data = {
            content: textareaRef.current?.value,
            id: 0,
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(process.env.REACT_APP_HOST_URL + 'posts', options);
        if (response.ok) {
            textareaRef.current.value = '';
            navigate('/');
        }
    }
    const cancelHandler = () => {
        textareaRef.current.value = '';
        navigate('/');
    }

    return (
        <div className={'create-page'}>
            Создать пост
            <form onSubmit={formSubmitHandler}>
                <label htmlFor={'text'}>Текст сообщения:</label>
                <textarea
                    className={'text-input'}
                    name={'text'}
                    ref={textareaRef} />
                <div className={'create-page-controls'}>
                    <button type={'button'} onClick={cancelHandler}>Отмена</button>
                    <button>Создать</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePage;

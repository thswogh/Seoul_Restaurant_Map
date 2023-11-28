import styled from 'styled-components';
import axios from 'axios';

const onSubmitHandler = async () => {
    // const config = {
    //     withCredentials: true,
    //     headers: {
    //         'Content-Type': 'application/json', // 예시로 Content-Type 헤더를 추가했습니다.
    //     },
    // };
    const userId = sessionStorage.getItem("userId");
    let body = { userId: userId, listName: "asdfsdfssdffasdf" };
    console.log(body);
    await axios
        .post("/list/createList", body)
        .then((response) => {
            console.log(response.data);

        })
        .catch((error) => console.log(error));
};
const Question = () => {
    return (
        <>  <div>question page</div>
            <button onClick={onSubmitHandler}>asdf</button><div>asd</div></>


    )
};

export default Question;
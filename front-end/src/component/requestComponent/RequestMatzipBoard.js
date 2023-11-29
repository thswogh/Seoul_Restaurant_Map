import { styled } from "styled-components";
import axios from "axios";
import { useEffect } from "react";


const RequestMatzipBoard = () => {
    useEffect(() => {
        const fetchData = async () => {
            const userId = sessionStorage.getItem("userId");
            try {
                const response = await axios.get("/requestBoard/searchRequestList", {
                    params: {
                        userId: userId,
                    }
                });
                console.log("request data", response.data);
            } catch (error) {
                // 에러 처리
                console.error("Error fetching data:", error);
            }
        };

        // 컴포넌트가 마운트될 때 fetchData 함수 실행
        fetchData();
    }, [])
    return (
        <>

        </>
    )
}

export default RequestMatzipBoard;
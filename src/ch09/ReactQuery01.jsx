import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

// 요청 때 사용하는 interceptor 활성화
// 매개변수로 api에 설정되어 있는 config를 받음
// accessToken이 있는지 확인해서 있으면 Bearer를 붙이 토큰을 붙여 주겠다
// 즉 요청을 할 때 토큰을 무조건 달아 주겠다.
api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("AccessToken");
    if (!!accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

// 전역 상태 관리(서버) - 서버 응답데이터 캐싱
function ReactQuery01() {
    const queryClient = new QueryClient();
    
    return <QueryClientProvider client={queryClient}>
        <Box1></Box1>
        <Box2></Box2>
    </QueryClientProvider>
}

export default ReactQuery01;

function Box1() {
    const principalQuery = useQuery({
         queryKey: ["principalQuery"],
         queryFn: async () => {
            return await api.get("/api/auth/principal");
         }
    });
    console.log(principalQuery.isLoading);
    console.log(principalQuery.data);
    return <div>

    </div>
}

function Box2() {
    const principalQuery = useQuery({
         queryKey: ["principalQuery"],
         queryFn: async () => {
            return await api.get("/api/auth/principal");
         }
    });
    console.log(principalQuery.isLoading);
    console.log(principalQuery.data);
    return <div>

    </div>
}
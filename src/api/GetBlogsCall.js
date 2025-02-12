import baseUrl from "./BaseUrl"

const GetBlogsCall=async()=>{
    const response=await fetch(baseUrl,{
        method:'GET',
    });
    return await response.json();
}
export default  GetBlogsCall;
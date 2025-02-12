import baseUrl from "./BaseUrl"

const DeleteBlogCall=async(item)=>{
    const response=await fetch(baseUrl+'/'+item.id,{
        method:'DELETE',
    });
    return await response.json();
}
export default  DeleteBlogCall;
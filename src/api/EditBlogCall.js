import baseUrl from "./BaseUrl"

const EditBlogCall=async(item)=>{
    const response=await fetch(baseUrl+'/'+item.id,{
        method:'PUT',
        body:JSON.stringify(item)
    });
    return await response.json();
}
export default  EditBlogCall;
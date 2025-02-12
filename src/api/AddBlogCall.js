import baseUrl from "./BaseUrl"

const AddBlogsCall=async(item)=>{
    const response=await fetch(baseUrl,{
        method:'POST',
        body:JSON.stringify(item),
        headers: {
            "Content-Type": "application/json",
          },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    return await response.json();
}
export default  AddBlogsCall;
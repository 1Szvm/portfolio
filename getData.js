export const getData=async (url)=>{
    const respo=await fetch(url)
    const data=await respo.json()
    return data
}
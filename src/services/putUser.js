export const putUser = (body,id)=>{
    const options = {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
}

// return fetch('http://localhost:4000/api/users/'+id,options).then(e => e.ok && true);
return fetch('https://dbbiblioteca.vercel.app/api/users/'+id,options).then(e => e.ok && true);
}
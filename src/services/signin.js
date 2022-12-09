export const signin = async (body)=>{
console.log(body);
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
}

// return fetch('http://localhost:4000/api/users/upload/user',options).then(e => e.ok && true);
return fetch('https://dbbiblioteca.vercel.app/api/users/upload/user',options).then(e => e.ok && true);
}
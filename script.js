/* console.log("Start");

setTimeout(() => {
    console.log("Timeout executed");
}, 2000);

console.log("End");

//callback
function fetchData(callback){
    setTimeout(()=>{
        callback("data recieved");
    },2000);
}

fetchData((data)=>{
    console.log(data);
});

//callback hell
setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
        console.log("2");
    },3000);
},1000);

//promise
const myPromise = new Promise((resolve , reject)=>{
    const success = true;

    setTimeout(()=>{
        if(success){
            resolve("promise resolved");
        }else{
            reject("promise rejected");
        }
    },5000);
});


console.log(myPromise);

myPromise
   .then(result=>console.log(result))
   .catch(error => console.log(error))
   .finally(()=>console.log("Done"));

console.log("After Promise");

setTimeout(()=>{
    console.log(myPromise)
},6000)
 */

/* function delay(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));

}

async function runAsync(){
    console.log("waiting");
    await delay(10000);
    console.log("done waiting");
}

runAsync();


async function fetchData(){
    try{
        throw new Error("user not found");

    }catch(err){
        console.log(err.message);
    }
}
fetchData(); */

/* fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>response.json())
.then(data=>{
    console.log(data.body);
})
.catch(err=>{
    console.log(err.message);
})
 */
/* async function getPost(){
    try{
        const res=  await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err.message);
    }
};
getPost(); */


//custom error:
/* console.log("Start");
class ValidateError extends Error{
    constructor(message){
        super(message);
        this.name="ValidateError";
    }

}

function User(age){
    if(age < 18){
        throw new ValidateError("user is not valid");
    }
}


try{
    User(15);
}catch(err){
    if(err instanceof ValidateError){
        console.log("validation error",err.message);
    }else{
        console.log("unknown error");
    }
} */

function divide(a, b) {
    let result = a / b;
    return result;
}

function calculate() {
    let x = 10;
    let y = undefined;
    let output = divide(x, y);
    console.log(output);
}

calculate();

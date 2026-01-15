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

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>response.json())
.then(data=>{
    console.log(data.body);
})
.catch(err=>{
    console.log(err.message);
})


const user = {
    name:"Angel",
    age:22,
    isActive:true
} ; 

console.log(user.name);
console.log(user.age);
user.email = "an.gutjar62@gmail.com";
console.log(user);

delete user.isActive;
console.log(user);

const userProfile = {
    greet : function(){
        console.log(`Hello , ${user.name}`);
    }
}

userProfile.greet();
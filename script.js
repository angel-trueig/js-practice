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
const skills = ["JavaScript", "Python", "C++", "Java", "Ruby"];

skills.push("Go"); //end
skills.unshift("HTML"); //starting

console.log(skills);

skills.pop(); //remove last 
console.log(skills);

skills.shift();//remove first
console.log(skills);

skills.forEach(skill=>{
    console.log(skill);
})


//destructuring
const student = {
    name:"Angel",
    course:"Javascript",
    duration:"3 months"
};

const {duration , name:username} = student;
console.log(username);


const [first , second] = skills;
console.log(first);

const[,,,fourth]= skills;
console.log(fourth);


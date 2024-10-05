//If statement
if(2>3){
    console.log("Hello 2")
}

//If else statement
let age = 12;
if(age>18){
    console.log("you are eligible to vote")
}
else{
    console.log("you are not eligible to vote")
}
//If if-else and else statement
let day = "monday";
if(day=="sunday"){
    console.log("today is sunday")
}
else if(day =='monday'){
    console.log("Today is monday")
}
else if(day == "tuesday"){
    console.log("Today is tuesday")
}
else{
    console.log("Invalid day")
}


//Switch Statement
let year = "march";
switch(year){
    case "january":
        console.log("this month is january");
        break;
    case "february":
        console.log("this month is february");
        break;
    case "march":
        console.log("this month is march");
        break;
    default:
        console.log("Invalid day"); 
}
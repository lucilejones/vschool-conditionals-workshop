let day = 3;
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);

// This could also be written to evaluate an expression with simple logic
// using the built-in JS method new Date() that creates a new Date object
// and .getDay() that returns an integer corresponding to the day of the week


// let today;

// function getDayName() {
//     switch (new Date().getDay()) {
//     case 0:
//         today = "Sunday";
//         break;
//     case 1:
//         today = "Monday";
//         break;
//     case 2:
//         today = "Tuesday";
//         break;
//     case 3:
//         today = "Wednesday";
//         break;
//     case 4:
//         today = "Thursday";
//         break;
//     case 5:
//         today = "Friday";
//         break;
//     case 6:
//         today = "Saturday";
//         break;
//     default:
//         today = "Unknown Day";
//     }
// }
// getDayName();
// console.log(today);


// write a 'switch' statement that assigns a grade based on a score
// output A, B, C, or D

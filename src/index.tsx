// import aa from './demo.js'
function a(i){
    if(/*process.env.NODE_ENV_==='web'*/i===5){
        i++;
    }else{
        i=i+2
    }
    return i;
}
// function b(i){
//     if(/*process.env.NODE_ENV==='web'*/i==5){
//         console.log(i)
//     }else {
//         console.log(i+5)
//     }
// }
// function c(i){
//     if(/*process.env.NODE_ENV==='web'*/i==5){
//         console.log(i)
//     }else if(i==6){
//         console.log(i+5)
//     }else{
//         console.log(i+10)
//     }
// }
const s = a(6);
// export const sa = process.env.NODE_ENV;
export default s;
// b(6)
// c(6)
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};

// Function infinite loop
// const infiniteLoop = (): never => {
//     while (true) {
//     }
// };


// function infiniteRec(): never {
//     return infiniteRec();
// }
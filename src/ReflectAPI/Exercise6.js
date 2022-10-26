// eslint-disable-next-line @typescript-eslint/no-unused-vars
let response = function() {
    let target = {};
    let key = 'status';
    let attributes = {
    value: 200,
    writable: true,
    configurable: true
};
    Reflect.defineProperty(
    target,
    key,
    attributes
);
return target;
}();

let display = () => 
console.log("is response configurable? i don't know")

export default display
let display = () => {    
    class Person {
        constructor( name ) {
            this.name = name;
        }
        set name( name ) {
            let [ first, last ] = name.split(' ');
            this.first = first;
            this.last = last;
        }
    }
    let person = new Person( 'Julius Caesar' );
    let newContext = { name: 'Marcus Aurelius' };

    Reflect.set(person,'name','Alexander Severus',newContext);

    console.log("Reflect.set() returns a true if conditions were true")
    console.log("person.first takes the first word from Reflect.set() which were not changed") 
    console.log("person.last takes the last word from Reflect.set() which were not changed")
    console.log("person.name displays undefined since person.name doesn carry any value")
    console.log("newContext.first returns the changed first word from person that passed through Reflect.set()")
    console.log("newContext.last returns the changed last word from person that passed through Reflect.set()")
    console.log("newContext.name returns the new values from Reflect.set()")
}
export default display

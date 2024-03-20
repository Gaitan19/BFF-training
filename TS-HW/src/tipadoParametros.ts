interface objEdadNombre {
    name:string;
    age:number;
}

const handleObj = (name:string,age:number):objEdadNombre => ({name,age})


const example = handleObj("Evanks",20)

console.log('example :>> ', example);
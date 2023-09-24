console.log("This is a beginning of a new project")

const add=(a)=>(b)=>a+b
const addition=add(10)(20)
//console.log(addition)

const greeting=(name='Fayaz')=>{
    console.log(`Hello ${name} and the sum is ${addition}`)
}

greeting('Hassan')
greeting('Asima')

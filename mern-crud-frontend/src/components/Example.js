const Example = ()=>{

    const f1 = () =>{
        console.log("function called")
    }
 const myDebounce = (call , d)=>{
    let timer 
    return (...args)=>{
       if (timer) clearTimeout(timer)
       setTimeout(()=>{
        call()
    },d)
    }

 }


const debounced = myDebounce(f1,5000)

    return (

        <>
        <input type="text" onChange={debounced}></input>
        </>
    )
}

export default Example
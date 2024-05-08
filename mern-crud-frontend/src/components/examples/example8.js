 const Example8 = ()=>{

  const  List1 = [1,2,3,4,5,6,7,8,9,10]
  const f1  = (arr,n)=>{
    let newArr= []
    for(let i=0;i<=arr.length;i +=n){
    
        newArr.push(arr.slice(i,i+n))
    }
    return newArr
    
  }
  const r = f1(List1,4)
  
  console.log(r)
  return (
    <>
    Test Code
    </>
  )
}

export default Example8
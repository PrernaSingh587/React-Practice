# React-Practice

useEffect has been used in this project

If you want a particular code inside a component to run only when some of the deps change and not always when the entire component is re-rendered, you can use useEffect.

useEffect(() => {

   console.log("something")
})

//In this case, it will executed every time , the component is rendered.

useEffect(() => {

   console.log("something")
},[])  

// only executed when the first rendering happens

useEffect(() => {

   console.log("something")
},[deps]) 

//renders only when the deps change. for eg you can add some state variables here. CHanging them will make the compoenent re-render and so will the function inside
this useEffect hook.


##Clean ups useEffect
useEffect(() => {

   console.log("something")        //1st arg
   
   return () => {                            // 2nd arg
      console.log("something") // cleaning up     
   }
},[deps]) 

//the clean up part will help in unmounting the component

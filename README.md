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

//When the component is first rendered,  first arg in useEffect is run first, and the clean up function registers its first task. When the useEffect is triggered again, firstly the clean up function will run, pushing out the previous registered task and then the first arg will run. The clean up function will again register its 2nd task.  

//the clean up will run also when the component is unmounted

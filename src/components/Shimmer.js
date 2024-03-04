

const Shimmer=()=>{
    const num=[1,1,1,1,1,1,1,1,1,1,1,1,1,1]

return (

<div className="flex flex-wrap">
<div className="p-4 m-4 bg-gray-100 w-[350px] h-[1500px] ">

</div>
<div className="flex flex-wrap flex-1">
    {num.map(()=> <div className="p-4 m-4 bg-gray-100 w-[350px] h-[250px]" ></div>)}
   
   
</div>

</div>
);
}

export default Shimmer;
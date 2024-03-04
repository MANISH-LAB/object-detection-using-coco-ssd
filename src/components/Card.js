const Card = (props) => {
    const {user}=props;
    const { name, bio, html_url, avatar_url,location }=user
    console.log(user);
  return (
    <div className="flex flex-wrap p-4 m-4"> <div className="max-w-sm hover:shadow-xl h-[450px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded overflow-hidden shadow-lg text-white">
    <div className="content-center"><img className="w-[80%] items-center content-center pl-20 py-3" src={avatar_url} alt="Avatar" /></div> 
     <div className="px-6 py-4">
       <div className="font-bold text-xl mb-2">{name}</div>
       <p className="text-black-300 text-md">{location}</p>
       <p className="text-black-300 text-md">{bio}</p>
     </div>
     <div className="px-6 py-4">
       <a
         href={html_url}
         target="_blank"
         rel="noopener noreferrer"
         className="text-orange-600 hover:text-blue-300 text-sm">
         GitHub Profile
       </a>
     </div>
   </div></div>
   
  );
};


export default Card;

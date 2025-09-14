import { FcGoogle } from "react-icons/fc";


export default function login() {
  return (
    <div className="flex items-center justify-center p-16 pb-40">

      <div className="flex items-center justify-center h-[450px] w-[500px] rounded-3xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <div className="flex flex-col gap-6 pt-20">
            <input type="text" 
              placeholder="example@email.com"
              className="px-4 py-2 outline-none border border-gray-400 rounded-full"
            />
            <input type="text" 
              placeholder="*********"
              className="px-4 py-2 outline-none border border-gray-400 rounded-full"
            />
            <div className="text-center">or</div>

              <button className="flex items-center justify-center gap-4 px-6 py-2 rounded-full bg-black hover:bg-white text-white hover:text-black hover:border transition duration-300 w-64 h-12">
                <FcGoogle size={20} />
                <span>Login with Google</span>
              </button>

          </div>
        </div>
      </div>
      
    </div>
  );
}

// {/* <button className="relative flex items-center justify-center px-6 py-2 bg-black rounded-full text-white overflow-hidden group w-64 h-12">
//   {/* Google Icon */}
//   <span
//     className="absolute left-6 transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:-translate-x-1/2"
//   >
//     <FcGoogle size={22} />
//   </span>

//   {/* Text */}
//   <span
//     className="transition-all duration-500 ease-in-out group-hover:opacity-0"
//   >
//     Login with Google
//   </span>
// </button> */}

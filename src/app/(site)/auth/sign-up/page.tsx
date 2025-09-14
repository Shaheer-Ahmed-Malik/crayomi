import { FcGoogle } from "react-icons/fc";


export default function Signup() {
  
  const InputField = ({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) => (
    <div className="flex flex-col gap-1">
      <p className="text-xs">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 outline-none border border-gray-400 rounded-full  w-[320px]"
      />
    </div>
  );

  return (
    <div className="flex flex-col items-center justify- p-16 pb-40 gap-4">
      <h1>
        Sign up
      </h1>
      <div className="flex flex-col gap-4 pt-10">
        <InputField label="Enter your first name" placeholder="Enter your name" />
        <InputField label="Enter your last name" placeholder="Enter your last name" />
        <InputField label="Enter your email" placeholder="example@email.com" />
        <InputField label="Enter your password" type="password" placeholder="**********" />
        <InputField label="Re-enter your password" type="password" placeholder="**********" />
      </div>
        {/* sign btn */}
        <div>
          <button className="flex items-center justify-center gap-4 px-6 py-2 w-[320px] rounded-full bg-blue-600 hover:bg-white text-white hover:text-black hover:border transition duration-300 h-12">
            <span>Sign up</span>
          </button>
        </div>
        
        {/* sign with google */}
        <div className="text-center">or</div>

          <button className="flex items-center justify-center gap-4 px-6 py-2 w-[320px] rounded-full bg-black hover:bg-white text-white hover:text-black hover:border transition duration-300 h-12">
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
    </div>

  );
}

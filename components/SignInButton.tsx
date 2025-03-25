import { signIn } from "@/auth"
import Image from "next/image";


export default function SignInButton({provider}:{provider:string}) {
  
  let providerName;

  switch (provider) {
    case 'google':
      providerName= "Google"
      break;
    case 'github':
      providerName = "Github"
      break;
    default:
      break;
  }
    
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <button type="submit" className="flex flex-row justify-center items-center gap-2 rounded-full border-2 border-sky-500 p-2 w-full cursor-pointer"><Image src={`/assets/icons/${provider}.svg`} width={32} height={32} alt={`${provider} icon`} />  Signin with {providerName}</button>
    </form>
  )
} 
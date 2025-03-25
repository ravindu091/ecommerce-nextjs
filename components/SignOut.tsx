import { signOut } from "@/auth"
import { Button } from "./ui/button";

 
export default function SignOut() {

    
  return (
    <form
      action={async () => {
        "use server"
        await signOut();
      }}
    >
      <button type='submit' className="text-md text-red-500 font-semibold pl-2">Sign out</button>
    </form>
  )
} 
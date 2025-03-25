import { auth } from "@/auth"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import SignOut from "./SignOut"
import { Button } from "./ui/button"
  

const UserButton =  async () => {

  const user = await auth()
   

  return (
   <div>
    {
        !user ? <div>
            <Link href={'/login'}><Button variant={'ghost'} className="text-blue-500">Sign In</Button></Link>
        </div> : <div>
        <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src={user.user?.image!} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="">
                <Link href={'/profile'} className="pl-2" >Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <SignOut />
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

        </div>
    }
   </div>
  )
}

export default UserButton
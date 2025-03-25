'use server'
 
import { permanentRedirect } from 'next/navigation'
import { auth, signIn } from '@/auth'
 
export async function isSessionHave() {
    const session = await auth();

    if(session?.user){
        return permanentRedirect(`/`)
    }

}


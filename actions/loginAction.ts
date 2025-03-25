'use server'
 
import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
import { auth } from '@/auth'
 
export async function isSessionHave() {
    const session = await auth();

    if(session?.user){
        return permanentRedirect(`/`)
    }

}
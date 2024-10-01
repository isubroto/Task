"use server"

import { signIn, signOut } from "./auth"
export async function doSocialLogin(formData) {
    await signIn(formData, { redirect: "/Dashboard" })
}
export async function doLogout() {
    await signOut({ redirect: "/SignUp" })
}
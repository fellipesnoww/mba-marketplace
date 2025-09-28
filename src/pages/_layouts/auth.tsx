import { Logo } from "@/components/logo";
import { Outlet } from "react-router";
import backgroundImg from "@/assets/background.png"

export function AuthLayout() {
    return (
        <div className="min-h-screen grid grid-cols-2 antialiased p-16">
            <div className="flex flex-col items-start">
                <Logo/>
                <div className="h-full flex items-center justify-center w-full">
                    <img src={backgroundImg} className="mt-15"/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center relative">
                <Outlet />
            </div>
        </div>
    )
}
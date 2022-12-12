import { Navigate, Outlet } from "react-router-dom";
import UserType from "../../declarations/User";
import NavBar from "../NavBar";
import { ReactNode } from "react";

export interface ProtectedProps {
    user?: UserType;
}
export default function Protected({ user }: ProtectedProps) {
    // if (!user) return <Navigate to="/login" />;

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

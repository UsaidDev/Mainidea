import { createContext, useState } from "react";


export const LikeContext = createContext(null)


export default function ContextLike({ children }) {
    const [like, Setlike] = useState(1)
    return (
        <LikeContext.Provider value={{ like, Setlike }}>
            {children}
        </LikeContext.Provider>
    )
}
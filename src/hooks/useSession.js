import React, { useContext, useState } from "react"

const SessionContext = React.createContext()
const SessionUpdateContext = React.createContext()

export function useSession() {
    return useContext(SessionContext)
}

export function useSessionUpdate() {
    return useContext(SessionUpdateContext)
}

export function SessionProvider({ children }) {
    const [state, setState] = useState({})

    return (
        <SessionContext.Provider value={state}>
            <SessionUpdateContext.Provider value={setState}>
                {children}
            </SessionUpdateContext.Provider>
        </SessionContext.Provider>
    )
}
import React from "react";

export type GlobalData = {
    username: string,
    setUsername: any,
    appName?: string,
}

// Create a context with defaul value
export const AppContext = React.createContext<GlobalData>({
    appName: "Default context app", username: "default user", setUsername: () => {
        return 'x'
    }
})
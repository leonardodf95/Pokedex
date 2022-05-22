import { createContext } from "react";

export default createContext({
    currentPage: null,
    setCurrentPage: () => undefined,
    totalPages: null,
    Previously: () => undefined,
    Next: () => undefined
})
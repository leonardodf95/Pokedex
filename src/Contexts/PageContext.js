import { createContext } from "react";

export default createContext({
    load: null,
    currentPage: null,
    setCurrentPage: () => undefined,
    totalPages: null,
    Previously: () => undefined,
    Next: () => undefined
})
import { TableRow } from "@/types"

export const generateRandomData = (): TableRow[] => {
    const sources = ["Google", "Reddit", "Twitter"]
    const actions = ["Delisted", "Removed"]

    return Array.from({ length: 50 }, (_, index) => ({
        id: Math.floor(100000 + Math.random() * 900000), // Random 6-digit number
        dateRemoved: "23 Sept 2023",
        link: "https://google.com",
        source: sources[Math.floor(Math.random() * sources.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
    }))
}

import { useMemo, useState } from "react";

const products = ["Apple", "Banana", "Camera", "Laptop", "Pencil"];
/*
    Move static data outside the component so it's not recreated on 
    every render—this removes the compiler warning and keeps your memoization accurate.
*/
export default function App() {
    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        return products.filter(item=>item.toLowerCase().includes(search.toLowerCase()))
    }, [search]);

    return (
        <div>
            <input
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
            />

            <h3>Filtered List:</h3>
            <ul>
                {filtered.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        </div>
    );
}

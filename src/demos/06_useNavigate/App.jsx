import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";

function DashBoard() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>welcome to dashboard</h1>

            <button onClick={() => navigate(1)}>
                {/* Because it cannot navigate at the beginning thats way intial forward */}
                after their is a page in forward
            </button>
            <button onClick={() => navigate("/New")}>intial forward</button>
        </div>
    );
}
function New() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>another page</h1>
            <button onClick={() => navigate(-1)}>back</button>
        </div>
    );
}

function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login page</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/DashBoard", { // useNavigate() supports this two properties only
                        replace: true,
                        state: { logged: true } // can access state through useLocation() Hook.
                    });
                }}
            >
                <input type="name" />
                <input type="password" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default function App() {
    return (
        <>
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/DashBoard" element={<DashBoard />} />
                    <Route path="/New" element={<New />} />
                </Routes>
            </MemoryRouter>
        </>
    );
}

import { BrowserRouter,Routes,Route,Link,useParams } from "react-router-dom";

function Home(){
    return(
        <div style={{textAlign: "center"}}>
            <h1>This is home page</h1>
            <Link to="/product/5">click it</Link>
        </div>
    );
}

function Product(){
    let {id} = useParams();
    return(
        <div>
            <p>This is paragraph</p>
            <p>product id:{id}</p>
        </div>
    );
}

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*id acts as variable we can use any name that has to be 
                use in parameters in useNavigate like this -> let {id} = useParams(); */}
                <Route path="/product/:id" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    );
}
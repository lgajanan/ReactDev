import { useRouteError } from "react-router-dom"
const Error = () =>{
     const err = useRouteError();
    return (
        <div>
            <h3>Opps Something went wrong.!</h3>
            <h3>{err.status} </h3>
           <h3> {err.statusText}</h3>
        </div>
    )
}
export default Error;
import { Link } from "react-router-dom"
import axios from "axios"


export default function Registration(){


    axios.get("https://httpbin.org/ip")
    .then(res => console.log(res))
    .catch(err => console.log(err))

    

    return(
        <>
        <h1>Testfgnbfss.kjfdbskljfblfkblfhbdlwhwbdllkg sdfljhfbew</h1>
        <Link to="/reg">djlhawijfqvewu ve</Link>
        </>
    )
}
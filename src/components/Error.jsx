import {useRouteError} from 'react-router-dom'
function Error(){
    const err=useRouteError();
    console.log(err);
    return (
        <div className='text-center mt-20 text-3xl'>
             <h1>Opps!</h1>     
             <h2>Please Enter correct Path</h2>
                <h3>{err.status + " : " + err.statusText}</h3>
                <h3>{err.data}</h3>
                <a href="/" className='text-blue-500'> Click To Go Back Home</a>
        </div>
    )
}
export default Error;
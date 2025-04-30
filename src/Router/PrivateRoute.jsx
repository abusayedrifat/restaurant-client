import  { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return  <div className="text-4xl flex justify-center items-center -mt-28 h-screen"><span className="loading loading-bars loading-md"></span></div>
    }
    if (user) {
        return children 
    }
    return <Navigate to='/logIn' state={location?.pathname} ></Navigate>
};

export default PrivateRoute;
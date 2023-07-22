
// import { Navigate, useLocation } from 'react-router-dom';
// import Loader from '../pages/Loader';
// import { useAuth } from '../Context/AuthProvider';


// const PrivateRouter = ({ children }) => {
//     const { loading, user } = useAuth()
//     const location = useLocation();
//     if (loading) {
//         return <Loader/>
//     }
//     if (user) {
//         return children
//     }
//     return <Navigate to="/login" state={{ from: location }} replace />;
// };

// export default PrivateRouter;
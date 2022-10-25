import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../authentication/firebase';

const ProtectedComponent = ({ children }) => {
    const [user, isLoading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && !user) {
            navigate('/login');
            return;
        }
    }, [user, isLoading, navigate]);

    return children;
};

export default ProtectedComponent;

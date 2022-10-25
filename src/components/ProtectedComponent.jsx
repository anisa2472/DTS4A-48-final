import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../authentication/firebase';

const ProtectedComponent = ({ children }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
    }, [user]);

    return children;
};

export default ProtectedComponent;

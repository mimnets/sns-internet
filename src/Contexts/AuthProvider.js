import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    return (
        <div>

        </div>
    );
};

export default AuthProvider;
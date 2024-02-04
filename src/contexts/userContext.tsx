'use client';
import React, { createContext, useState, ReactNode } from 'react';
import { NextPage } from 'next';


type userDataT = {
  name: string;
  email?: string;
  isLogin: boolean;
}

interface userContextProps {
  userInfo: userDataT;
  setUserInfo: React.Dispatch<React.SetStateAction<userDataT>>;
}

const defaultUserData: userContextProps = {
  userInfo: {
    name: '',
    email: '',
    isLogin: false,
  },
  setUserInfo: () => { },
};

// Create context
export const UserContext = createContext<userContextProps>(defaultUserData);

// Create a custom hook to use the UserContext
export const useUserInfoContext = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useUserInfoContext must be used within a UserProvider');
  }
  return context;
};

const { Provider } = UserContext;

const UserProvider: NextPage<{ children: ReactNode }> = ({ children }) => {
  const [userinfo, setUserInfo] = useState<userDataT>(defaultUserData.userInfo);


  const providerValues: userContextProps = {
    userInfo: userinfo,
    setUserInfo,
  };

  return (
    <Provider value={providerValues}>
      {children}
    </Provider>
  );
};

export default UserProvider;
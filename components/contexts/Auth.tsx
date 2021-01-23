import React, { createContext, useEffect, useState } from "react";
import {useAuth} from "../../lib/firebase";
import { User } from 'firebase/app';

// Contextの型を用意
interface IAuthContext {
  currentUser: User | null | undefined;
}

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const AuthContext = createContext<IAuthContext>({ currentUser: undefined });

const AuthProvider = (props: any) => {
  // Contextに持たせるcurrentUserは内部的にはuseStateで管理
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
    useAuth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser
      }}
    >
      // こうすることで、下階層のコンポーネントを内包できるようになる
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

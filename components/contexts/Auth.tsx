import React, { createContext, useEffect, useState } from 'react'
import { useAuth } from '../../lib/firebase'
import firebase from 'firebase'

// Contextの型を用意
interface IAuthContext {
  currentUser: firebase.User | null | undefined;
}

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const AuthContext = createContext<IAuthContext>({ currentUser: undefined })

const AuthProvider = (props: any) => {
  // Contextに持たせるcurrentUserは内部的にはuseStateで管理
  const [currentUser, setCurrentUser] = useState<firebase.User | null | undefined>(
    undefined
  )

  useEffect(() => {
    // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
    useAuth().onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export { AuthContext, AuthProvider }

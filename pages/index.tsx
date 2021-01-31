import { AuthProvider } from '../components/contexts/Auth'
import MyFooter from '../components/layouts/MyFooter'

const Index = () => {
  return (
    <main>
      <AuthProvider>
        hoge
      </AuthProvider>
      <MyFooter/>
    </main>
  )
}

export default Index

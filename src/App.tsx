import React, { useContext } from 'react'
import { AuthContext } from './context';
import { AuthRoutes, DashboardRoutes } from './routes';

const App: React.FC = () => {

  const { token } = useContext(AuthContext);  

  return token ? <DashboardRoutes /> : <AuthRoutes />
}

export default App
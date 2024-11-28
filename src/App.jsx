import "./config/connection"
import Layout from './component/Layout'
import CreateTransaction from "./component/CreateTransaction"

const App = () => {
  return (
   <Layout>
    <CreateTransaction/>
   </Layout>
  )
}

export default App

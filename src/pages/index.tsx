import Layout from "../components/Layout";
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {

  const clients = [
    new Client('John Doe', 34, '1'),
    new Client('Anna Doe', 22, '2'),
    new Client('Peter Doe', 57, '3'),
    new Client('Joe Doe', 19, '4')
  ]

  function selectedClient(client: Client) {
    console.log(client.name)
  }

  function deletedClient(client: Client) {
    console.log(`Deleting ${client.name}`)
  }


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-900 to to-blue-400
      text-white
    `}>
      <Layout title='Registration'>
        <Table clients={clients} 
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        />
      </Layout>
    </div>
  )
}

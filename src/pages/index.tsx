import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from '../components/Table';
import Client from '../core/Client';
import Form from '../components/Form';
import { useState } from "react";
export default function Home() {

  const [client, setClient] = useState<Client>(Client.void())
  const [visible, setVisible] = useState<'table' | 'form'>('table')


  const clients = [
    new Client('John Doe', 34, '1'),
    new Client('Anna Doe', 22, '2'),
    new Client('Peter Doe', 57, '3'),
    new Client('Joe Doe', 19, '4')
  ]

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function deletedClient(client: Client) {
    console.log(`Deleting ${client.name}`)
  }

  function saveClient (client: Client) {
    console.log(client)
    setVisible('table')
  }

  function newClient() {
    setClient(Client.void())
    setVisible('form')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-900 to to-blue-400
      text-white
    `}>
      <Layout title='Registration'>
        {visible === 'table' ? (
                  <>
                  <div className='flex justify-end'>
              
                    <Button 
                      color='green'
                      className="mb-4"
                      onClick={newClient}
                    > New Client</Button>
          
                  </div>
          
                  <Table 
                    clients={clients} 
                    selectedClient={selectedClient}
                    deletedClient={deletedClient}
                  />
              </>
        ): (

          <Form 
              client={client}
              clientChange={saveClient}
              canceled={() => setVisible('table')}
            />
        )}  
      </Layout>
    </div>
  )
}

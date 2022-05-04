import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from '../components/Table';
import Client from '../core/Client';
import Form from '../components/Form';
import { useEffect, useState } from "react";
import ClientRepository from '../core/clientRepository';
import ClientCollection from '../../backend/db/ClientCollection';

export default function Home() {

  const repo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  } 

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  async function saveClient (client: Client) {
    await repo.save(client)
    getAll()
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

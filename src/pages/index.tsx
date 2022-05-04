import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from '../components/Table';
import Form from '../components/Form';
import useClients from '../hooks/useClients';

export default function Home() {

  const { 
    client, 
    clients, 
    selectClient, 
    deleteClient,
    newClient,
    saveClient,
    tableVisible,
    showTable
  } = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-900 to to-blue-400
      text-white
    `}>
      <Layout title='Registration'>
        {tableVisible ? (
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
                    selectedClient={selectClient}
                    deletedClient={deleteClient}
                  />
              </>
        ): (

          <Form 
              client={client}
              clientChange={saveClient}
              canceled={() => showTable()}
            />
        )}  
      </Layout>
    </div>
  )
}

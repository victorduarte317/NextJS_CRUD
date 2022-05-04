import Client from "../core/Client"
import { useState, useEffect } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import ClientRepository from "../core/clientRepository"
import usePageVisibility from './usePageVisibility';

export default function useClients() {
    
  const repo: ClientRepository = new ClientCollection()
  const {
      tableVisible, 
      showTable, 
      showForm
    } = usePageVisibility()
  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])
  
  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      showTable()
    })
  } 

  function selectClient(client: Client) {
    setClient(client)
    showForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  async function saveClient (client: Client) {
    await repo.save(client)
    getAll()
  }

  function newClient() {
    setClient(Client.void())
    showForm()
  }

  return {
      client,
      clients,
      saveClient,
      newClient,
      deleteClient,
      selectClient,
      getAll,
      tableVisible,
      showTable
  }
}
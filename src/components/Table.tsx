import Client from '../core/Client';
import { DeleteIcon, EditIcon } from './Icons';


interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

export default function Table (props: TableProps) {
    
    const displayActions = props.deletedClient || props.selectedClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4"> ID </th>
                <th className="text-left p-4"> Name </th>
                <th className="text-left p-4"> Age </th>
                {displayActions 
                    ? <th className="p-4"> Actions </th>
                    : false
                }

            </tr>
        )
    }


    function renderData() {
        return props.clients?.map((client, i) => {

            return (
                <tr key = {client.id}
                    className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {displayActions ? renderActions(client) : false }
                </tr>
            )

        })
    }

    function renderActions(client: Client) {
        return (
            <td className='flex justify-center'>
                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)} 
                    className={`
                    flex justify-center
                    items-center text-green-600
                    rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                        {EditIcon}
                    </button>

                ): false}

                {props.deletedClient ? (
                    <button onClick={() => props.deletedClient?.(client)} 
                    className={`
                        flex justify-center
                        items-center text-red-500
                        rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {DeleteIcon}
                    </button>
                ) : false}
            </td>
        )
    }
    
    return (
        <table className='w-full overflow-hidden rounded-xl'>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
            
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}
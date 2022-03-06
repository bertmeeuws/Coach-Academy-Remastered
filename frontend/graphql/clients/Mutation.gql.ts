import { gql } from "urql";

export const UPDATE_CLIENT = gql`
mutation updateClient($client: UpdateClientInput!){
    updateClient(updateClientInput: $client){
        id
    }
}`

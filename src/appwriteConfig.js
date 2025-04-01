import { Client, Databases, Account } from "appwrite";


// export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
// export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
// export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
// export const COLLECTION_ID_MESSAGES = import.meta.env.VITE_COLLECTION_ID_MESSAGES;


export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
export const PROJECT_ID = "67d93e68000f7f957ca6";
export const DATABASE_ID = "67d9633000058175bdd4";
export const COLLECTION_ID_MESSAGES = "67d963480010ecc50308";

const client = new Client();
// client.setProject("67d93e68000f7f957ca6");
client.setProject(import.meta.env.VITE_API_URL);

export const databases = new Databases(client);
export const account = new Account(client);


export default client
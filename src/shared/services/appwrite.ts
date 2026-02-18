import { Client, TablesDB } from "appwrite";

const client = new Client();

client.setEndpoint("https://tor.cloud.appwrite.io/v1")
client.setProject('69562fe3003ddf74bb03')

const db = new TablesDB(client);

export { client, db }
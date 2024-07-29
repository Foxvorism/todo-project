import { dbs } from "./config";
import { ID } from "appwrite";

const db = {};

const collections = [
    {
        db_id: import.meta.env.VITE_DATABASE_ID,
        col_id: import.meta.env.VITE_COLLECTION_ID_TASKS,
        col_name: "tasks"
    }
];

collections.forEach((col) => {
    db[col.col_name] = {
        create: (payload, permission, id = ID.unique()) => 
            dbs.createDocument(
                col.db_id,
                col.col_id,
                id,
                payload,
                permission
            ),

        update: (id, payload, permission) =>
            dbs.updateDocument(
                col.db_id,
                col.col_id,
                id,
                payload,
                permission
            ),

        delete: (id) => 
            dbs.deleteDocument(
                col.db_id,
                col.col_id,
                id
            ),

        list: (queries = []) =>
            dbs.listDocuments(
                col.db_id,
                col.col_id,
                queries
            ),

        get: (id) => dbs.getDocument(
            col.db_id,
            col.col_id,
            id
        )
    };
});

export default db;
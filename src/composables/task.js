import { ref } from "vue";
import db from "@/appwrite/databases";
import { Query } from "appwrite";

const useTask = () => {
    const tasks = ref([]);

    const getTasks = async () => {
        try {
            const res = await db.tasks.list([
                Query.orderAsc('$createdAt')
            ]);
            tasks.value = res.documents;
        } catch (error) {
            console.error(error);
        }
        
    }

    const storeTask = async (payload) => {
        if (payload === "") return;

        try {
            await db.tasks.create(payload);
            location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const updateTask = async (id, payload) => {
        try {
            await db.tasks.update(id, payload);
            location.reload();
        } catch (error) {
            console.log(error);
        }
        
    }

    const deleteTask = async (id) => {
        try {
            await db.tasks.delete(id);
        location.reload();
        } catch (error) {
            console.log(error);
        }
        
    }

    return {
        tasks,
        getTasks,
        storeTask,
        updateTask,
        deleteTask
    }
}

export default useTask;
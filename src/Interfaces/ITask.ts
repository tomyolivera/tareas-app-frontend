export interface ITask {
    id: number,
    name: string,
    description: string,
    completed: boolean,
    created_at: Date,
    updated_at: Date,
    handleDelete: (id: number) => Promise<void>,
}
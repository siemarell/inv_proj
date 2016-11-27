export interface Task {
    id: number;
    text: string;
    start_date: string;
    duration: number;
    progress : number;
    open: boolean;
    projectId: number;
}
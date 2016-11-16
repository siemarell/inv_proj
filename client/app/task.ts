/**
 * Created by kovalev on 16.11.2016.
 */

export interface Task {
    id: number;
    projectId: number;
    text: string;
    start_date: string;
    duration: number;
    progress : number;
    open: boolean;
}
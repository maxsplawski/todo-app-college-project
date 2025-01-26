interface User {
    name: string;
    email: string;
    password: string;
    tasks: Task[];
}

interface Task {
    id: number;
    title: string;
    description: string;
    isFinished: boolean;
}

import axios from 'axios';

export class PostService {
    private baseUrl = "https://jsonplaceholder.typicode.com/posts";

    public abortController: any;

    getAll(): Promise<Post[]> {
        this.abortController = new AbortController();
        const signal = this.abortController.signal;
        return axios.get<Post[]>(this.baseUrl, { signal }).then(res => res.data)
    }

    getPostById(id: number): Promise<Post> {
        this.abortController = new AbortController();
        const signal = this.abortController.signal;
        return axios.get<Post>(this.baseUrl + "/" + id, { signal }).then(res => res.data)
    }
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}
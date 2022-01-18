import { PostService } from "./Post.service";
import axios from 'axios';

jest.mock('axios');
// for remap types for using with Typescript
const mockedAxios = axios as jest.Mocked<typeof axios>;
const service = new PostService();

describe("Posts unit test", () => {

    it("should get all posts", async () => {
        mockedAxios.get.mockResolvedValue({ data: [{ id: 1, title: "test", body: "test", userId: 1 }, { id: 2, title: "test", body: "test", userId: 1 }] })
        const res = await service.getAll();
        expect(res.length).toBe(2);
    });

    it("should get one post by id", async () => {
        mockedAxios.get.mockResolvedValue({ data: { id: 1, title: "test", body: "test", userId: 1 } })
        const res = await service.getPostById(1);
        expect(res.title).toBe("test");
    });

    afterEach(() => {
        service.abortController?.abort();
    })

});
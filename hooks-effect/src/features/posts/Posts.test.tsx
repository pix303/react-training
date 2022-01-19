import {
  render,
  screen,
  within,
  waitFor,
  cleanup,
} from "@testing-library/react";
import Posts from "./Posts";

import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
// for remap types for using with Typescript
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Posts unit test", () => {
  const allPosts = {
    data: [
      { id: 1, title: "test", body: "test", userId: 1 },
      { id: 2, title: "test", body: "test", userId: 1 },
      { id: 3, title: "test", body: "test", userId: 1 },
      { id: 4, title: "test", body: "test", userId: 1 },
    ],
  };

  const singlePost = {
    data: { id: 1, title: "test", body: "test", userId: 1 },
  };

  beforeAll(() => {
    jest.resetAllMocks();
  });

  it("should init component", async () => {
    mockedAxios.get.mockResolvedValue(allPosts);

    render(<Posts />);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    const postsList = screen.getByTestId("posts-list");

    const postsListItems = within(postsList).getAllByRole("listitem");
    expect(postsListItems.length).toBe(4);
  });

  it("should retrive one post", async () => {
    mockedAxios.get
      .mockResolvedValueOnce(allPosts)
      .mockResolvedValueOnce(singlePost);

    render(<Posts />);

    const posts = screen.getByTestId("posts");
    const postsList = screen.getByTestId("posts-list");

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    const postsInput: HTMLInputElement = within(posts).getByRole("textbox");
    const postsButton = within(posts).getByRole("button");
    userEvent.type(postsInput, "1");
    userEvent.click(postsButton);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(2);
    });
    const postsListItems = await within(postsList).findAllByRole("listitem");
    expect(postsListItems.length).toBe(1);
  });

  afterEach(() => {
    cleanup();
  });
});

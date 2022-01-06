import { render, fireEvent, screen, act } from "@testing-library/react";
import { User, UserInfo } from "./UserInfo";

describe("Userinfo test", () => {
  //   let container: HTMLElement;
  //   beforeEach(() => {
  //     container = document.createElement("div");
  //     document.body.appendChild(container);
  //   });
  //   afterEach(() => {
  //     unmountComponentAtNode(container);
  //     container.remove();
  //   });

  const u: User = { name: "Giacomo", surname: "Carraro", age: 1 };

  const feedbackElementContent = (): string | null => {
    return screen.getByTestId("user-feedback").textContent;
  };

  it("should init component", () => {
    act(() => {
      render(<UserInfo {...u} />);
    });

    expect(feedbackElementContent()).toBe("Giacomo Carraro,1");
  });

  it("should change model data by input change", () => {
    act(() => {
      render(<UserInfo {...u} />);
    });

    const nameInput = screen.getByTestId("name-input");
    fireEvent.change(nameInput, { target: { value: "Paolo" } });
    expect(feedbackElementContent()).toBe("Paolo Carraro,1");

    const surnameInput = screen.getByTestId("surname-input");
    fireEvent.change(surnameInput, { target: { value: "Carter" } });
    expect(feedbackElementContent()).toBe("Paolo Carter,1");

    const ageInput = screen.getByTestId("age-input");
    fireEvent.change(ageInput, { target: { value: "34" } });
    expect(feedbackElementContent()).toBe("Paolo Carter,34");
  });
});

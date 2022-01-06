import React, { useState, useEffect } from "react";
import "./UserInfo.css";

export const UserInfo = ({ name, surname, age }: User) => {
  const [user, setUser] = useState<User>({ name: "", surname: "", age: 0 });

  useEffect(() => {
    setUser({ name: name, surname: surname, age: age });
  }, []);

  return (
    <div data-testid="user-info">
      <h3>User info</h3>
      <form>
        <fieldset>
          <label>Name</label>
          <input
            data-testid="name-input"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </fieldset>

        <fieldset>
          <label>Surname</label>
          <input
            data-testid="surname-input"
            type="text"
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
        </fieldset>

        <fieldset>
          <label>Age</label>
          <input
            data-testid="age-input"
            type="number"
            value={user.age}
            onChange={(e) =>
              setUser({ ...user, age: parseInt(e.target.value) })
            }
          />
        </fieldset>
      </form>

      <p data-testid="user-feedback">
        {user.name} {user.surname},{user.age}
      </p>
    </div>
  );
};

export type User = {
  name: string;
  surname?: string;
  age?: number;
};

import React, { useState } from "react";
import { isError } from "util";
import "./UserInfo.css";

export const UserInfo = () => {
  const [user, setUser] = useState<User>({ name: "", surname: "", age: 0 });

  return (
    <div>
      <h3>User info</h3>
      <form>
        <fieldset>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </fieldset>

        <fieldset>
          <label>Surname</label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
        </fieldset>

        <fieldset>
          <label>Age</label>
          <input
            type="number"
            onChange={(e) =>
              setUser({ ...user, age: parseInt(e.target.value) })
            }
          />
        </fieldset>
      </form>

      <p>
        {user.name} {user.surname},{user.age}
      </p>
    </div>
  );
};

type User = {
  name: string;
  surname: string;
  age: number;
};

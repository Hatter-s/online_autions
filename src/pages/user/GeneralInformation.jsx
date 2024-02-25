import UserFormControl from "./component/UserFormControl";
import { selectUser } from "./userSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const GeneralInformation = () => {
  const user = useSelector(selectUser);
  useEffect(() => {
    setUsername(user.username)
    setEmail(user.email)
  }, [user.username, user.email])
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="mt-10">
        <h1 className="mb-10">Hello {user.username}</h1>
        <form>
            <UserFormControl type="text" label="Username: " inputId="username" value={username} changeValue={setUsername} />
            <UserFormControl type="text" label="Email: " inputId="email" value={email} changeValue={setEmail} />
        </form>
      </div>
    </>
  );
};

export default GeneralInformation;

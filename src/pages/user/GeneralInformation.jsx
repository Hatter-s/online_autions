import UserFormControl from "./component/UserFormControl";
import { selectUser, updateUserInfo, openBalanceModal } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import ButtonPrimary from "@/components/UI/ButtonPrimary";

const GeneralInformation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setName(user.name);
  }, [user.username, user.email, user.name]);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="mt-10">
        <h1 className="mb-10">Hello {user.name}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              updateUserInfo({
                userId: user.id,
                updateData: {
                  name,
                  email,
                },
              })
            );
          }}
        >
          <div className="flex items-center gap-2 text-gray-700 text-lg my-4">
            <p className="mb-0">Balance:</p>
            <div className="flex gap-4">
              {user.balance}
              <Button
                className="p-1"
                variant="outline-primary"
                type="button"
                onClick={() => dispatch(openBalanceModal())}
              >
                <Plus />
              </Button>
            </div>
          </div>
          <UserFormControl
            type="text"
            label="Username: "
            inputId="username"
            value={username}
            changeValue={setUsername}
            readOnly={true}
          />
          <UserFormControl
            type="text"
            label="Name: "
            inputId="name"
            value={name}
            changeValue={setName}
          />
          <UserFormControl
            type="text"
            label="Email: "
            inputId="email"
            value={email}
            changeValue={setEmail}
          />
          <ButtonPrimary type="submit">Change</ButtonPrimary>
        </form>
      </div>
    </>
  );
};

export default GeneralInformation;

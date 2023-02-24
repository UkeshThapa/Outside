import { useEffect, useState } from "react";
import axios from "axios";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [userStatus, setUserStatus] = useState(false);
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3006/users");
      setUsers(res.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const addUser = async (data) => {
    try {
      const request = {
        name: data.fullName,
        email: data.email,
        password: data.password,
      };
      await axios.post("http://localhost:3006/users", request);
      setUsers([request, ...users]);
      setUserStatus(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, errorMessage, userStatus, setUserStatus, addUser };
};

export default useUsers;

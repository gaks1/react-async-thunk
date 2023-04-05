import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../redux/users/usersSlice";

const Users = () => {
    const { users, isLoading, error} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <ul key="users-list">
            {users.map(user => (
                <li key={user.login.uuid}>
                    {user.name.first} {user.name.last}
                </li>
            ))}
        </ul>
    );
}
    

export default Users;
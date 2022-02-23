// Cmps
import { UserPreview } from "./UserPreview";

export const UserList = ({ users, handleEditUser }) => {
    if (!users.length) return <p className="users-list-empty">No users available</p>;
    return (
        <section className="user-list main-layout flex justify-center">
            {users.map(user => (
                <UserPreview key={user.id} user={user} handleEditUser={handleEditUser} />
            ))}
        </section>
    );
}



// Cmps
import { UserPreview } from "./UserPreview";

export const UserList = ({ users, handleEditUser, handleRemoveUser }) => {
    if (!users.length) return <p className="users-list-empty">No users available</p>;
    return (
        <section className="user-list-container main-layout flex">
            <div className="user-list flex justify-center">
                {users.map(user => (
                    <UserPreview key={user.id} user={user} handleEditUser={handleEditUser} handleRemoveUser={handleRemoveUser} />
                ))}
            </div>
        </section>
    );
}



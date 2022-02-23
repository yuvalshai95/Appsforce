
export const UserPreview = ({ user, handleEditUser, handleRemoveUser }) => {
    const { first: firstName, last: lastName, title } = user.name
    const { city, country, street } = user.address

    const onRemoveUser = () => {
        handleRemoveUser(user.id)
    }

    return (
        <div className="user-preview-container main-layout flex column align-center">
            <div className="preview-info flex column">
                <img className="user-img" src={user.imgUrl} alt="user-img" />
                <p>{`${title} ${firstName} ${lastName}`}</p>
                <p>{`${street.name}, ${city}`}</p>
                <p>{country}</p>
                <p>{user.email}</p>
            </div>
            <div className="btns-container flex space-between">
                <button className="edit-btn" onClick={() => { handleEditUser(user.id) }}>Edit</button>
                <button className="remove-btn" onClick={onRemoveUser}>Remove</button>
            </div>
        </div>
    )
}

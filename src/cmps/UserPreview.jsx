
export const UserPreview = ({ user, handleEditUser, handleRemoveUser }) => {
    const { first: firstName, last: lastName, title } = user.name
    const { city, country, street } = user.address

    const onRemoveUser = () => {
        handleRemoveUser(user.id)
    }

    return (
        <div className="user-preview-container  flex column align-center">
            <div className="preview-info flex column align-center">
                <img className="user-img" src={user.imgUrl} alt="user-img" />
                <p className="user-name">{`${title} ${firstName} ${lastName}`}</p>
                <p className="user-address">{`${street.name}, ${city}`}</p>
                <p className="user-country">{country}</p>
                <p className="user-email">{user.email}</p>
            </div>
            <div className="btns-container flex">
                <button className="primary-btn edit-btn" onClick={() => { handleEditUser(user.id) }}>Edit</button>
                <button className="delete-btn remove-btn" onClick={onRemoveUser}>Remove</button>
            </div>
        </div>
    )
}

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useForm } from "react-hook-form";

// Actions
import { updateUser, addUser } from '../store/user/user.action.js'

// Services
import { userService } from '../services/user.service.js'


export const UserEdit = () => {
    const dispatch = useDispatch()
    const { userId } = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        onLoadUser()
        return () => { setUser(null) }
    }, [])

    const onLoadUser = async () => {
        const user = userId ? await userService.getUserById(userId) : userService.getEmptyUser();
        setUser(user)

    }

    const onSubmit = ({ firstName, lastName, title, country, city, street, email }) => {
        // Edit
        if (userId) {
            const userToUpdate = {
                id: user.id,
                name: { first: firstName, last: lastName, title: title },
                email,
                imgUrl: user.imgUrl,
                address: { country: country, city: city, street: { name: street } }
            }
            dispatch(updateUser(userToUpdate))
            handleGoBack()
        } else { // Add
            const userToAdd = {
                name: { first: firstName, last: lastName, title: title },
                email: email,
                imgUrl: `https://robohash.org/${firstName}?set=set5`,
                address: { country: country, city: city, street: { name: street } }
            }
            dispatch(addUser(userToAdd))
            handleGoBack()
        }
    }

    const handleGoBack = () => {
        navigate('/');
    };

    if (!user) return <></>
    return (
        <div className="user-edit-screen-overlay">
            <div className="user-edit-container">
                <button className="close-btn" onClick={handleGoBack} >✖</button>
                {userId ? <h1>Edit profile</h1> : <h1>Add User</h1>}
                {user &&
                    <form className="edit-form flex column align-center justify-center" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-content">
                            <div className="input-wrapper">
                                <label>*First Name:
                                <input type="text"
                                        defaultValue={user.name.first}
                                        placeholder="First name"
                                        {...register("firstName", {
                                            required: "This field is required",
                                            minLength: { value: 3, message: "Min length is 3" },
                                            maxLength: { value: 12, message: "Max length is 12" }
                                        })}
                                    />
                                </label>
                                <p>{errors.firstName?.message}</p>
                            </div>

                            <div className="input-wrapper">
                                <label>*Last Name:
                                <input type="text"
                                        defaultValue={user.name.last}
                                        placeholder="Last name"
                                        {...register("lastName", {
                                            required: "This field is required",
                                            minLength: { value: 3, message: "Min length is 3" },
                                            maxLength: { value: 12, message: "Max length is 12" }
                                        })}
                                    />
                                </label>
                                <p>{errors.lastName?.message}</p>
                            </div>

                            <div className="input-wrapper">
                                <label>*Title:
                                <input type="text"
                                        defaultValue={user.name.title}
                                        placeholder="Title"
                                        {...register("title", {
                                            required: "This field is required",
                                            minLength: { value: 2, message: "Min length is 3" },
                                            maxLength: { value: 12, message: "Max length is 12" }
                                        })}
                                    />
                                </label>
                                <p>{errors.title?.message}</p>
                            </div>

                            <div className="input-wrapper">
                                <label>*Country:
                                <input type="text"
                                        defaultValue={user.address.country}
                                        placeholder="Country"
                                        {...register("country", {
                                            required: "This field is required",
                                            minLength: { value: 3, message: "Min length is 3" },
                                            maxLength: { value: 25, message: "Max length is 25" }
                                        })}
                                    />
                                </label>
                                <p>{errors.country?.message}</p>
                            </div>

                            <div className="input-wrapper">
                                <label>*City:
                                <input type="text"
                                        defaultValue={user.address.city}
                                        placeholder="City"
                                        {...register("city", {
                                            required: "This field is required",
                                            minLength: { value: 3, message: "Min length is 3" },
                                            maxLength: { value: 25, message: "Max length is 25" }
                                        })}
                                    />
                                </label>
                                <p>{errors.city?.message}</p>
                            </div>

                            <div className="input-wrapper">
                                <label>*street:
                                <input type="text"
                                        defaultValue={user.address.street.name}
                                        placeholder="Street"
                                        {...register("street", {
                                            required: "This field is required",
                                            minLength: { value: 3, message: "Min length is 3" },
                                            maxLength: { value: 25, message: "Max length is 25" }
                                        })}
                                    />
                                </label>
                                <p>{errors.street?.message}</p>
                            </div>

                            <div className="input-wrapper">
                                <label>*Email:
                                <input type="email"
                                        defaultValue={user.email}
                                        placeholder="Email"
                                        {...register("email", {
                                            required: "This field is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            }
                                        })}
                                    />
                                </label>
                                <p>{errors.email?.message}</p>
                            </div>

                            <div className="form-btns">
                                <button className="primary-btn" type="submit">Save</button>
                                <button className="delete-btn" onClick={handleGoBack}>Close</button>
                            </div>
                        </div>
                    </form>}

            </div>
        </div >
    )
}
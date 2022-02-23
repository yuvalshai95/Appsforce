import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useForm } from "react-hook-form";

// Actions
import { updateUser } from '../store/user/user.action.js'

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
        return () => {
            setUser(null)
        }
    }, [])

    const onLoadUser = async () => {
        const user = await userService.getUserById(userId)
        setUser(user)

    }

    const onSubmit = ({ firstName, lastName, title, country, city, street }) => {
        const userToUpdate = {
            id: user.id,
            name: { first: firstName, last: lastName, title: title },
            email: user.email,
            imgUrl: user.imgUrl,
            address: { country: country, city: city, street: { name: street } }
        }
        dispatch(updateUser(userToUpdate))
        handleGoBack()
    }

    const handleGoBack = () => {
        navigate('/');
    };

    if (!user) return <></>
    return (
        <div className="user-edit-screen-overlay">
            <div className="user-edit-container">
                <button className="close-btn" onClick={handleGoBack} >✖</button>
                <h1>Edit profile</h1>
                {user &&
                    <form className="flex column align-center justify-center" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Name</h2>
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

                        <h2>Location</h2>
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

                        <h2>Email</h2>
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

                        <div className="form-btns">
                            <input type="submit" value="Save" />
                            <button onClick={handleGoBack}>Cancel</button>
                        </div>
                    </form>}

            </div>
        </div>
    )
}
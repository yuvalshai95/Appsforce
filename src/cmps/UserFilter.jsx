import { useEffect, useState, } from "react"
import { useDispatch } from 'react-redux';

// Actions
import { setFilter } from '../store/user/user.action.js'

export const UserFilter = () => {
    const dispatch = useDispatch();
    const [filterBy, setFilterBy] = useState({ email: '', name: '', location: '' })

    useEffect(() => {
        onSetFilter()
    }, [filterBy])

    const onSetFilter = () => {
        dispatch(setFilter(filterBy))
    }

    return (
        <div className="user-filter">
            <form onSubmit={evt => evt.preventDefault()}>
                <label>Email:
                <input type="text" placeholder="Search by email" value={filterBy.email}
                        onChange={(evt) => {
                            setFilterBy((prevFilterBy) => ({ ...prevFilterBy, email: evt.target.value }))
                            onSetFilter()
                        }} />
                </label>
                <label>Name:
                <input type="text" placeholder="Search by name" value={filterBy.name}
                        onChange={(evt) => {
                            setFilterBy((prevFilterBy) => ({ ...prevFilterBy, name: evt.target.value }))
                            onSetFilter()
                        }} />
                </label>
                <label>Country:
                <input type="text" placeholder="Search by name" value={filterBy.location}
                        onChange={(evt) => {
                            setFilterBy((prevFilterBy) => ({ ...prevFilterBy, location: evt.target.value }))
                            onSetFilter()
                        }} />
                </label>
            </form>
        </div>
    )
}
import { useEffect, useState, } from "react"
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';

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

    const updateSearch = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, [field]: value }));
    }

    const debounceInputText = debounce(updateSearch, 1000);


    return (
        <div className="user-filter-container">
            <form className="user-filter-form flex column justify-center align-center" onSubmit={evt => evt.preventDefault()}>
                <h2 className="filter-title">Search: </h2>

                <input type="text" name="email" placeholder="Search by email"
                    onChange={debounceInputText}
                />

                <input type="text" name="name" placeholder="Search by name"
                    onChange={debounceInputText}
                />

                <input type="text" name="location" placeholder="Search by country"
                    onChange={debounceInputText}
                />

            </form>
        </div>
    )
}
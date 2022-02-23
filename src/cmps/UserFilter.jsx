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

    const updateSearch = (e) => setFilterBy((prevFilterBy) => ({ ...prevFilterBy, location: e.target.value }));
    const debounceCountry = debounce(updateSearch, 1500);

    return (
        <div className="user-filter-container">
            <form className="user-filter-form flex column justify-center align-center" onSubmit={evt => evt.preventDefault()}>
                <h2 className="filter-title">Search: </h2>

                <input type="text" placeholder="Search by email" value={filterBy.email}
                    onChange={(evt) => {
                        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, email: evt.target.value }))
                        onSetFilter()
                    }} />


                <input type="text" placeholder="Search by name" value={filterBy.name}
                    onChange={(evt) => {
                        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, name: evt.target.value }))
                        onSetFilter()
                    }} />


                <input type="text" placeholder="Search by country"
                    onChange={debounceCountry}
                />
                {/* <input type="text" placeholder="Search by country" value={filterBy.location}
                    onChange={(evt) => {
                        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, location: evt.target.value }))
                        onSetFilter()
                        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, location: evt.target.value }))
                        onSetFilter()
                    }} /> */}
            </form>
        </div>
    )
}
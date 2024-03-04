import { useEffect } from 'react'
import { GITHUBID, GITHUB_API } from '../utils/constants'
import Shimmer from './Shimmer';
import Card from './Card';
import { useDispatch, useSelector } from "react-redux"
import { updateList } from '../utils/githubcontactSlice';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    const dispatch = useDispatch();
    const githubData = useSelector((store) => store.githubcontact.id);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        if (githubData.length !== GITHUBID.length) {
            GITHUBID.forEach(async (e) => {
                const data = await fetch(GITHUB_API + e);
                const json = await data.json();
                dispatch(updateList(json));
                console.log(GITHUB_API + e)
            });
        }
    }

    if (githubData.length === 0) {
        return <Shimmer />
    }

    return (
        <div>
            <Header />
            <div className="p-4 m-4 font-bold justify-center items-center content-center">
                <h1 className='text-center text-2xl'>Github Handles of Project Creators</h1>
            </div>
            <div className="flex flex-wrap p-4 m-4  items-center content-start border-4 border-gray-400 rounded-lg ">
                {/* Display only two cards */}
                {githubData.slice(0, 2).map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;


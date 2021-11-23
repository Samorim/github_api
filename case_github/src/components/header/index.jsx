import React, { useState, useContext} from 'react';
import { FiSearch } from 'react-icons/fi';
//import { Link } from 'react-router-dom';
//import { useQuery } from '../../hooks/useQuery';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton,
} from './styles';

import client from '../../services/client';

import { context } from '../../context';
//import { Username } from '../userDetails/styles';

const Header = props => {
    const ctx = useContext(context);
    const [searchedValue, setSearchedValue] = useState('');

    

    async function getUserData() {
        try {
            const response = await client.get(`${searchedValue}`);
            const repos = await client.get(`${props.username}/repos`);

            ctx.setUserData(response.data);
            ctx.setUserRepos(repos.data);
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput type="text" value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
        
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton> 

               {/* <Link to={`/${searchValue}`}>
                    <FiSearch size={15} />
                   </Link>*/ }
            </HeaderInputContainer>
        </HeaderSection>
    );
}

export default Header;
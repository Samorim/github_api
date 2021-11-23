import React, { useContext} from 'react';
import {useQuery} from '../hooks/useQuery';
import Container from '../components/container';
import Header from '../components/header/index';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';
import { context } from '../context';

export default function Home() {
    const ctx = useContext(context);
    const query = useQuery();

    return (
        <Container>
            <Header username={query.get('username')} />
            
            <UserContainer>
            {ctx.userData?.name ?
                <React.Fragment>
                    <UserPicture url={ctx.userData?.avatar_url} alternativeTexte={ctx.userData?.Login}/>
                    <UserDetails name={ctx.userData?.name} login={ctx.userData?.Login} bio={ctx.userData?.bio}/>
                    <UserNumbers repos={ctx.userRepos} followers={ctx.userData?.followers} following={ctx.userData?.following}/>
                </React.Fragment>
            : undefined}
            </UserContainer>
        </Container>
    );
}
import React from 'react';
import UserProfile from './user/UserProfile'
import UserStat from './user/UserStat';
import UserProperty from './user/UserProperty';

const Result = ({user, setUser}) => {
    return (
        <div className="result-section">
            <div className="container">
                <UserProfile name={user.name} setUser={setUser}/>
                <div className="info-section">
                    <UserStat user={user}/>
                    <UserProperty user={user}/>
                </div>
            </div>
        </div>
    )
}

export default Result;
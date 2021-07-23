import React from 'react';
import { GiHearts, GiStiletto, GiMagicPotion, GiShield } from 'react-icons/gi';

const UserStat = ({user}) => {
    return (
        <div className="user-stats">
            <div className="stats-title">
                <h5>Stats</h5>
            </div>
            <form className="stats-contents">
                <div className="one-stat">
                    <div className="stat-icon"><GiHearts/></div>
                    <label>HP</label>
                    <input
                        value={user.hp}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiStiletto/></div>
                    <label>ATK</label>
                    <input
                        value={user.atk}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiMagicPotion/></div>
                    <label>MP</label>
                    <input
                        value={user.mp}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiShield/></div>
                    <label>DEF</label>
                    <input
                        value={user.def}
                    />
                </div>
                <div className="stat-modify">
                    <button>
                        수정
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserStat;
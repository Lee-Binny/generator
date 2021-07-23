import React from 'react';
import { GiCutDiamond, GiCoins, GiClover, GiKey } from 'react-icons/gi';

const UserProperty = ({user}) => {
    return (
        <div className="user-stats">
            <div className="stats-title">
                <h5>Property</h5>
            </div>
            <form className="stats-contents">
                <div className="one-stat">
                    <div className="stat-icon"><GiCutDiamond/></div>
                    <label>Dia</label>
                    <input
                        value={user.dia}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiCoins/></div>
                    <label>Coin</label>
                    <input
                        value={user.coin}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiClover/></div>
                    <label>Clover</label>
                    <input
                        value={user.clover}
                    />
                </div>
                <div className="one-stat">
                    <div className="stat-icon"><GiKey/></div>
                    <label>Key</label>
                    <input
                        value={user.key}
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

export default UserProperty;
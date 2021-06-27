import React from 'react';
import Profile from './components/Profile/Profile';
import "./index.css";
import user from './user.json';
import statisticalData from './statistical-data.json';
import StatisticsList from './components/StatisticsList/StatisticsList';
import friends from './friends.json';
import transactions from './transactions.json';
import FriendList from './components/FriendList/FriendList';
import TransactionsList from './components/Transactions/TransactionsList';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList
        statisticalData={statisticalData}
        title={'Upload stats'}
      />
      <FriendList friends={friends} />
      <TransactionsList Transactions={transactions} />
    </>
  );
};

export default App;

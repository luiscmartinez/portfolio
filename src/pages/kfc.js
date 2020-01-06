import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import clan from '../components/object';
import { Member } from '../components/Members';
import { TestingChart } from '../components/clanHelpers';
const Kfc = () => {
  console.log(clan);
  return (
    <Layout>
      <div
        style={{
          border: '2px solid red',
          backgroundImage: 'radial-gradient(circle, white 0%, #db4b3b 100%)',
        }}
      >
        <h1>KFC</h1>
        <img src={clan.badgeUrls.small} alt="clan-badge" />
        <div
          style={{
            display: 'flex',
            width: '300px',
            flexDirection: 'column',
            color: 'white',
          }}
        >
          <div>Win Streaks: {clan.warWinStreak}</div>
          <div>Wins : {clan.warWins}</div>
          <div>Ties : {clan.warTies}</div>
          <div>Losses : {clan.warLosses}</div>
        </div>
        {/* {clan.memberList.map(member => <Member key={member.tag} member={member} />)} */}
        {/* {clan.memberList.map(member => )} */}
        {<TestingChart memberList={clan.memberList} />}
      </div>
    </Layout>
  );
};

export default Kfc;

import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import clan from '../components/object';
import { Member } from '../components/Members';
import { TestingChart } from '../components/clanHelpers';
const Kfc = () => {
  console.log(clan);
  useEffect(() => {
    console.log(process.env.REACT_APP_TOKEN + '');
    const lol = async () => {
      console.log('this wat call');
      const data = await axios
        .get('https://api.clashofclans.com/v1/clans/?name=kfc', {
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY2NjgzZGU5LWYzZGEtNDM2NC1iZTc4LTAwMWQ4MWY1MjIyMiIsImlhdCI6MTU3ODMwMzU1MSwic3ViIjoiZGV2ZWxvcGVyLzdhOTU2MDQwLTQwYWQtZWMwYi01MDg0LWY0OGE5MTg2YjhhMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwOC4xODUuODcuMTM4Il0sInR5cGUiOiJjbGllbnQifV19.VJ2GoXnEMhVxSuxQUpSjShDHxDLNy_SES1ltCAJjY_lGPAnNg8zE8WV2uDHKYibUBXJplRh7ZufdZSUdGmfZIQ',
          },
        })
        .then(function(response) {
          // handle success
          console.log(response);
        })
        .catch(err => console.error(err));
      console.log('📦 HERE', data);
    };
    lol();
  }, []);
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

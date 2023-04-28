

import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import HeaderComponent from './components/HeaderComponent.js';
import GoBackComponent from './components/GoBackComponent.js';
// screens
import HomeScreen from './screens/HomeScreen.js';
import HelloScreen from './screens/HelloScreen.js'
import ContactScreen from './screens/ContactScreen.js'
import IfItReallyIsMeScreen from './screens/IfItReallyIsMeScreen.js';
import SlimNightFantasyExitScreen from './screens/SlimNightFantasyExitScreen.js';
import SuddenlyTwoScreen from './screens/SuddenlyTwoScreen.js';
import LicoriceScreen from './screens/LicoriceScreen.js';
import RhubarbScreen from './screens/RhubarbScreen.js';
import TVFSpringZineScreen from './screens/TVFSpringZineScreen.js';
import KiteAgainScreen from './screens/KiteAgainScreen.js';
import BeaconHillScreen from './screens/BeaconHillScreen.js';
import IdidItPerfectlyScreen from './screens/IdidItPerfectlyScreen.js';
import LotusBauhiniaScreen from './screens/LotusBauhiniaScreen.js';
import LoveTalkinScreen from './screens/LoveTalkinScreen.js';
import TaipeiScreen from './screens/TaipeiScreen.js';
import TCScreen from './screens/TCScreen.js';
import TelevisionFlowersScreen from './screens/TelevisionFlowersScreen.js';
import WarpStayScreen from './screens/WarpStayScreen.js';
import Spokane2Screen from './screens/Spokane2Screen.js';
import ConsonantBlendsScreen from './screens/ConsonantBlendsScreen.js';

function App() {
  return (
    <>
    <HeaderComponent />
      <Routes>
        <Route index element={<HomeScreen />}/>
          <Route 
          path='/hello' 
          element={<HelloScreen />}
          />
          <Route 
          path='/contact' 
          element={<ContactScreen />}
          />
          <Route 
          path='/if-it-really-is-me' 
          element={<IfItReallyIsMeScreen />}
          />
          <Route 
          path='/slim-night-fantasy-exit' 
          element={<SlimNightFantasyExitScreen />}
          />
          <Route 
          path='/suddenly-two' 
          element={<SuddenlyTwoScreen />}
          />
          <Route 
          path='/licorice' 
          element={<LicoriceScreen />}
          />
          <Route 
          path='/rhubarb' 
          element={<RhubarbScreen />}
          />
          <Route 
          path='/television-flowers-spring-zine' 
          element={<TVFSpringZineScreen />}
          />
          <Route 
          path='/kite-again' 
          element={<KiteAgainScreen />}
          />
          <Route 
          path='/beacon-hill' 
          element={<BeaconHillScreen />}
          />
          <Route 
          path='/i-did-it-perfectly' 
          element={<IdidItPerfectlyScreen />}
          />
          <Route 
          path='/lotus-bauhinia' 
          element={<LotusBauhiniaScreen />}
          />
          <Route 
          path='/love-talkin' 
          element={<LoveTalkinScreen />}
          />
          <Route 
          path='/taipei' 
          element={<TaipeiScreen />}
          />
          <Route 
          path='/tc' 
          element={<TCScreen />}
          />
          <Route 
          path='/television-flowers' 
          element={<TelevisionFlowersScreen />}
          />
          <Route 
          path='/warp-stay' 
          element={<WarpStayScreen />}
          />
          <Route 
          path='/spokane-2' 
          element={<Spokane2Screen />}
          />
          <Route 
          path='/consonant-blends' 
          element={<ConsonantBlendsScreen />}
          />

      </Routes>
    </>
  );
};

export default App;
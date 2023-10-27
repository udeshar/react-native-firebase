import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const RnPaper = () => (
          <SafeAreaView style={{flex : 1}} >
                    <TopBar />
                    <BottomBar />
          </SafeAreaView>
);

export default RnPaper;
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Home' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Home')}
        >
          <FontAwesome name="home" size={24} color={selectedTab === 'Home' ? '#1DA1F2' : 'white'} />
          <Text style={selectedTab === 'Home' ? styles.selectedTabText : styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Search' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Search')}
        >
          <FontAwesome name="search" size={24} color={selectedTab === 'Search' ? '#1DA1F2' : 'white'} />
          <Text style={selectedTab === 'Search' ? styles.selectedTabText : styles.tabText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Communities' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Communities')}
        >
          <FontAwesome name="users" size={24} color={selectedTab === 'Communities' ? '#1DA1F2' : 'white'} />
          <Text style={selectedTab === 'Communities' ? styles.selectedTabText : styles.tabText}>Communities</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Notifications' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Notifications')}
        >
          <FontAwesome name="bell" size={24} color={selectedTab === 'Notifications' ? '#1DA1F2' : 'white'} />
          <Text style={selectedTab === 'Notifications' ? styles.selectedTabText : styles.tabText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Messages' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Messages')}
        >
          <FontAwesome name="envelope" size={24} color={selectedTab === 'Messages' ? '#1DA1F2' : 'white'} />
          <Text style={selectedTab === 'Messages' ? styles.selectedTabText : styles.tabText}>Messages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 120,
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 40,
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  tabText: {
    color: 'white',
    fontSize: 12,
  },
  selectedTab: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#1DA1F2',
  },
  selectedTabText: {
    color: '#1DA1F2',
    fontSize: 12,
    marginTop: 1,
  },
});

export default NavigationBar;

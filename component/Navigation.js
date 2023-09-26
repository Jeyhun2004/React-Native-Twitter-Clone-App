import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from @expo/vector-icons

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState('For You');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <FontAwesome name="user-circle" size={24} color="white" style={styles.profileIcon} />
        <View style={styles.logo}>
          <Text style={styles.logoText}>X</Text>
        </View>
      </View>
      <View style={styles.sections}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'For You' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('For You')}
        >
          <Text style={styles.tabText}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Following' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Following')}
        >
          <Text style={styles.tabText}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderColor: 'white',
    borderBottomWidth: 0.5,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30, 
  },
  logoText: {
    color: 'white',
    fontSize: 20,
  },
  profileIcon: {
    marginRight: 10, 
  },
  sections: {
    flexDirection: 'row', 
    borderColor: 'white',
    borderBottomWidth: 0.5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  tabText: {
    color: 'white',
    fontSize: 20,
  },
  selectedTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#1DA1F2',
  },
  selectedTabText: {
    color: '#1DA1F2',
  },
});

export default Navigation;

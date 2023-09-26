import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You can use a library like @expo/vector-icons for icons

const Home = () => {
  const tweets = [
    {
      Profile: 'https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg',
      Username: 'Jeyhun',
      Tweet: 'Hi everyone 👋, I started to learn React Native 2 weeks, and I created some apps, and I started to create a Twitter Clone app',
      Comments: 5,
      Retweets: 20,
      Likes: 67,
      Views: 456,
    },
    {
      Profile: 'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg',
      Username: 'React Native',
      Tweet: 'We\'re aware of a number of build failures on Android starting on 2023-11-04 when v0.71.0-rc0 was published, due to us pushing an artifact to Maven Central together with the default RN gradle file being misconfigured.',
      Comments: 12,
      Retweets: 45,
      Likes: 123,
      Views: 789,
    },
    {
      Profile: 'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg',
      Username: 'React Native',
      Tweet: 'We\'re aware of a number of build failures on Android starting on 2023-11-04 when v0.71.0-rc0 was published, due to us pushing an artifact to Maven Central together with the default RN gradle file being misconfigured.',
      Comments: 12,
      Retweets: 45,
      Likes: 123,
      Views: 789,
    },
    {
      Profile: 'https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg',
      Username: 'Jeyhun',
      Tweet: 'Hi everyone 👋, I started to learn React Native 2 weeks, and I created some apps, and I started to create a Twitter Clone app',
      Comments: 5,
      Retweets: 20,
      Likes: 67,
      Views: 456,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {tweets.map((tweet, index) => (
        <View style={styles.tweetContainer} key={index}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: tweet.Profile }} style={styles.profileImage} />
          </View>
          <View style={styles.tweetContent}>
            <Text style={styles.usernameText}>{tweet.Username}</Text>
            <Text style={styles.tweetText}>{tweet.Tweet}</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.icon}>
                <FontAwesome name="comment-o" size={20} color="white" />
                <Text style={styles.iconText}>{tweet.Comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <FontAwesome name="retweet" size={20} color="white" />
                <Text style={styles.iconText}>{tweet.Retweets}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <FontAwesome name="heart-o" size={20} color="white" />
                <Text style={styles.iconText}>{tweet.Likes}</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.viewCount}>{tweet.Views} views</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: '75%',
  },
  tweetContainer: {
    padding: 10,
    borderColor: 'gray',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  tweetContent: {
    flex: 1,
    flexDirection: 'column',
  },
  usernameText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tweetText: {
    color: 'white',
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  iconText: {
    color: 'white',
    marginLeft: 5,
  },
  viewCount: {
    color: 'gray',
    fontSize: 14,
  },
});

export default Home;

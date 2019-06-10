import React from 'react';
import Cards from './common/cards.jsx';

const Home = () => (
  <div className='post-feed'>
    <Cards
      header='Preventing Unwanted Content from Google Keyboard'
      body='This is especially useful if your project includes libraries written in
        native code (.so files) which support different CPU architectures. You
        can split your APK per architecture so that a user
        running an arm ABI doesn’t receive the code for x86, and so on.
        To do this, add the following to your app level build.gradle file'
      author='Nosa Belvi'
      time='2 MIN READ'
      />
    <Cards
      header='Preventing Unwanted Content from Google Keyboard'
      body='This is especially useful if your project includes libraries written in
        native code (.so files) which support different CPU architectures. You
        can split your APK per architecture so that a user
        running an arm ABI doesn’t receive the code for x86, and so on.
        To do this, add the following to your app level build.gradle file'
      author='Nosa Belvi'
      time='2 MIN READ'
    />
    <Cards
      header='Preventing Unwanted Content from Google Keyboard'
      body='This is especially useful if your project includes libraries written in
        native code (.so files) which support different CPU architectures. You
        can split your APK per architecture so that a user
        running an arm ABI doesn’t receive the code for x86, and so on.
        To do this, add the following to your app level build.gradle file.'
      author='Nosa Belvi'
      time='2 MIN READ'
    />
  </div>
);

export default Home;

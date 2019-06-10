import React, { Fragment } from 'react';
import Cards from './common/cards.jsx';
import Banner from './banner.jsx';
import Footer from './common/footer.jsx';

const Home = () => (
  <Fragment>
    <Banner />
    <div className='post-feed container'>
      <Cards
        header='Preventing Unwanted Content from Google Keyboard'
        body='This is especially useful if your project includes libraries written in
          native code (.so files) which support different CPU architectures. You
          can split your APK per architecture.'
        author='Nosa Belvi'
        time='2 MIN READ'
        />
      <Cards
        header='Preventing Unwanted Content from Google Keyboard'
        body='This is especially useful if your project includes libraries written in
          native code (.so files) which support different CPU architectures. You
          can split your APK per architecture.'
        author='Nosa Belvi'
        time='2 MIN READ'
      />
      <Cards
        header='Preventing Unwanted Content from Google Keyboard'
        body='This is especially useful if your project includes libraries written in
          native code (.so files) which support different CPU architectures. You
          can split your APK per architecture.'
        author='Nosa Belvi'
        time='2 MIN READ'
      />
      <Cards
        header='Preventing Unwanted Content from Google Keyboard'
        body='This is especially useful if your project includes libraries written in
          native code (.so files) which support different CPU architectures. You
          can split your APK per architecture.'
        author='Nosa Belvi'
        time='2 MIN READ'
        />
      <Cards
        header='Preventing Unwanted Content from Google Keyboard'
        body='This is especially useful if your project includes libraries written in
          native code (.so files) which support different CPU architectures. You
          can split your APK per architecture.'
        author='Nosa Belvi'
        time='2 MIN READ'
      />
      <Cards
        header='Preventing Unwanted Content from Google Keyboard'
        body='This is especially useful if your project includes libraries written in
          native code (.so files) which support different CPU architectures. You
          can split your APK per architecture.'
        author='Nosa Belvi'
        time='2 MIN READ'
      />
    </div>
    <Footer />
  </Fragment>
);

export default Home;

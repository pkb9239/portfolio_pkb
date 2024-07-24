'use client';

import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MouseFollower from '@/components/MouseFollower';
import NavBar from '@/components/NavBar';
import Project from '@/components/Project';
import ScrollTopButton from '@/components/ScrollTopButton';
import Study from '@/components/Study';
import Script from 'next/script';
import useResize from '@/hooks/useResize';

const Home = () => {
  const { isMobile } = useResize();
  return (
    <>
      <Script
        id="channelTalk"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "${process.env.NEXT_PUBLIC_CHANNEL_IO_KEY}"
  });
	`,
        }}
      />

      <main>
        <MouseFollower>
          <NavBar />
          <Header />
          {!isMobile && (
            <nav className="fixed md:right-32 md:bottom-12 right-5 bottom-5 flex justify-around items-center w-12 h-12 z-50">
              <ScrollTopButton />
            </nav>
          )}
          <section className="flex flex-col items-center md:py-16 py-0 md:gap-16 gap-6">
            <article
              id="project"
              className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
            >
              <Project />
            </article>
            <article
              id="education"
              className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
            >
              <Education />
            </article>
            <article
              id="study"
              className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
            >
              <Study />
            </article>
          </section>
          <Footer />
        </MouseFollower>
      </main>
    </>
  );
};

export default Home;

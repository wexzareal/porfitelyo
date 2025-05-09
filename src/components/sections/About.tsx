import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store';
import DiscordStatus from '../DiscordStatus';
import SpotifyNowPlaying from '../SpotifyNowPlaying';

const About: React.FC = () => {
  const setActiveSection = useAppStore((state) => state.setActiveSection);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about');
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [setActiveSection]);

  return (
    <section id="about" ref={containerRef} className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

        <div className="grid max-w-5xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 dark:text-gray-300">
              Selam ben Nevzat sanal yani wexza discord Yetkili Alım Yapıyorum.
            </p>

            <div className="pt-4 space-y-4">
              {/* Discord Status */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-slate-700/40 dark:border-slate-600/20">
                <h4 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">DISCORD</h4>
                <DiscordStatus />
              </div>

              {/* Spotify Status */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-slate-700/40 dark:border-slate-600/20">
                <h4 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">ŞU ANDA DİNLİYOR</h4>
                <SpotifyNowPlaying />
              </div>
            </div>
          </motion.div>

          {/* Stats and Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Fun Stats with Animated Progress Bars */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-slate-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Hızlı İstatistikler</h3>
              <div className="space-y-5">
                {[
                  { label: 'Yetkili Olmayı Öğretme', value: 90 },
                  { label: 'Tüketilen Kahve (litre)', value: 50 },
                  { label: 'Alınan Yeni Yetkililer', value: 70 },
                  { label: 'Mutlu Ownerlar', value: 95 },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.label}</span>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{stat.value}%</span>
                    </div>
                    <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* İlgi Alanları */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-slate-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">İlgi Alanları</h3>
              <div className="flex flex-wrap gap-2">
                {['Yetkili Bulmak', 'Sunucu Pp Banner Design','Music','Yetkili Olmak', 'Bot Altyapıarını Denemek'].map(
                  (interest, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{ y: -3 }}
                      data-hover
                    >
                      {interest}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
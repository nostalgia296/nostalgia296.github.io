import { createSignal, onMount, onCleanup, Index, createMemo } from 'solid-js';
import type { Component, JSX } from 'solid-js';

type Particle = Readonly<{
  size: number;
  left: number;
  top: number;
  driftDuration: number;
  pulseDuration: number;
  delay: number;
}>;

const App: Component = () => {
  const [isSmallScreen, setIsSmallScreen] = createSignal(false);

  onMount(() => {
    const mql = window.matchMedia('(max-width:639px)');
    const onChange = () => setIsSmallScreen(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    onCleanup(() => mql.removeEventListener('change', onChange));
  });

  const particles = createMemo<Particle[]>(() => {
    const count = isSmallScreen() ? 15 : 30;
    return Array.from({ length: count }, () => {
      const base = isSmallScreen() ? 20 : 40;
      const range = isSmallScreen() ? 40 : 80;
      return {
        size: Math.random() * range + base,
        left: Math.random() * 100,
        top: Math.random() * 100,
        driftDuration: Math.random() * 10 + 10,
        pulseDuration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      };
    });
  });

  const cssVar = (k: string, v: number | string, unit = '') =>
    ({ [k]: `${v}${unit}` } as JSX.CSSProperties);

  return (
    <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* 背景大光斑 */}
      <div class="absolute inset-0 opacity-30">
        <div
          class="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-pink-200 rounded-full blur-3xl animate-pulse-custom"
          style={{ ...cssVar('--pulse-duration', 4, 's'), animation: 'float 6s ease-in-out infinite' }}
        />
        <div
          class="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-purple-200 rounded-full blur-3xl animate-pulse-custom"
          style={{
            ...cssVar('--pulse-duration', 4, 's'),
            animation: 'float 8s ease-in-out infinite',
            'animation-delay': '2s',
          }}
        />
        <div
          class="absolute top-1/2 left-1/3 w-40 h-40 sm:w-80 sm:h-80 bg-rose-200 rounded-full blur-3xl animate-pulse-custom"
          style={{
            ...cssVar('--pulse-duration', 4, 's'),
            animation: 'float 7s ease-in-out infinite',
            'animation-delay': '4s',
          }}
        />
      </div>

      {/* 装饰粒子 */}
      <div class="absolute inset-0 pointer-events-none">
        <Index each={particles()}>
          {(p) => (
            <div
              class="absolute rounded-full bg-pink-300/20 animate-drift animate-pulse-custom"
              style={{
                width: `${p().size}px`,
                height: `${p().size}px`,
                left: `${p().left}%`,
                top: `${p().top}%`,
                ...cssVar('--drift-duration', p().driftDuration, 's'),
                ...cssVar('--pulse-duration', p().pulseDuration, 's'),
                'animation-delay': `${p().delay}s`,
              }}
            />
          )}
        </Index>
      </div>

      {/* 主要内容卡片 */}
      <div class="text-center rounded-3xl p-6 sm:p-16 bg-white/90 backdrop-blur-custom border border-pink-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative z-10 group mx-4 sm:mx-8 max-w-3xl w-full animate-fade-in-up">
        <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-pink-200 to-purple-200 opacity-40 blur-lg rounded-t-3xl" />

        <div class="mb-6 sm:mb-8 relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl blur-lg opacity-50" />
          <h1 class="relative text-4xl sm:text-5xl md:text-7xl font-black px-6 sm:px-10 py-4 sm:py-8 inline-block hover:scale-105 transition-all duration-300">
            <span class="glowing-text text-gradient-pink-purple drop-shadow-md">Hello, I'm Lai</span>
          </h1>
        </div>

        <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-md mx-auto leading-relaxed px-4 animate-fade-in-up" style={{ 'animation-delay': '200ms' }}>
          Welcome to my digital space. Explore my thoughts and projects below.
        </p>

        {/* 按钮区 */}
        <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 px-4">
          <a
            href="https://nostalgia296.github.io/blog"
            class="text-base sm:text-lg text-white font-medium transition-all duration-300 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 shadow-lg hover:shadow-xl hover:shadow-pink-300/50 group relative overflow-hidden w-full sm:w-auto min-h-[52px] flex items-center justify-center hover:-translate-y-0.5"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Blog
            </span>
            <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </a>

          <a
            href="http://github.com/nostalgia296"
            class="text-base sm:text-lg text-white font-medium transition-all duration-300 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 shadow-lg hover:shadow-xl hover:shadow-purple-300/50 group relative overflow-hidden w-full sm:w-auto min-h-[52px] flex items-center justify-center hover:-translate-y-0.5"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" /></svg>
              GitHub
            </span>
            <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </a>
        </div>

        {/* 底部装饰 */}
        <div class="mt-12 sm:mt-16 flex justify-center items-center gap-2 sm:gap-3 animate-fade-in-up" style={{ 'animation-delay': '400ms' }}>
          <div class="w-2 h-2 bg-pink-300 rounded-full animate-pulse-glow" />
          <div class="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300" />
          <div class="w-2 h-2 bg-purple-300 rounded-full animate-pulse-glow" style={{ 'animation-delay': '500ms' }} />
          <div class="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300" />
          <div class="w-2 h-2 bg-pink-300 rounded-full animate-pulse-glow" style={{ 'animation-delay': '1000ms' }} />
        </div>
      </div>

      {/* 浮动装饰圆环 */}
      <div class="absolute top-10 right-10 sm:top-20 sm:right-20 w-12 h-12 sm:w-20 sm:h-20 border-4 border-pink-300/30 rounded-full animate-spin-float" style={{ ...cssVar('--spin-duration', 20, 's') }} />
      <div class="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-10 h-10 sm:w-16 sm:h-16 border-4 border-purple-300/30 rounded-full animate-spin-float-reverse" style={{ ...cssVar('--spin-duration', 15, 's') }} />
    </div>
  );
};

export default App;

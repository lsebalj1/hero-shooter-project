<template>
  <div class="home">
    <div class="hero-section">
      <h1>Hero Shooter Game</h1>
      <p class="subtitle">
        Dive into fast-paced action! Choose your hero, master unique abilities, and compete for victory.
      </p>
      <button class="cta-btn">Play Now</button>
    </div>
    <div class="features">
      <div class="feature-card">
        <img src="https://img.icons8.com/color/96/000000/knight.png" alt="Unique Heroes" />
        <h2>Unique Heroes</h2>
        <p>Pick from a roster of heroes, each with their own playstyle and abilities.</p>
      </div>
      <div class="feature-card">
        <img src="https://img.icons8.com/color/96/000000/lightning-bolt.png" alt="Fast Gameplay" />
        <h2>Fast Gameplay</h2>
        <p>Experience intense, quick matches that keep you on your toes.</p>
      </div>
      <div class="feature-card">
        <img src="https://img.icons8.com/color/96/000000/trophy.png" alt="Competitive" />
        <h2>Competitive</h2>
        <p>Climb the ranks and prove your skills against players worldwide.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

.hero-section {
  text-align: center;
  padding: 60px 20px 40px 20px;
}

.hero-section h1 {
  color: #00adb5;
  font-size: 3rem;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.3rem;
  color: #b2dfdb;
  margin-bottom: 32px;
}

.cta-btn {
  background: #00adb5;
  color: #232526;
  border: none;
  border-radius: 25px;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.cta-btn:hover {
  background: #00cfc1;
}

.features {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.feature-card {
  background: #393e46;
  border-radius: 18px;
  padding: 32px 24px;
  width: 260px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.feature-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.feature-card img {
  width: 64px;
  margin-bottom: 18px;
}
.feature-card h2 {
  color: #00adb5;
  font-size: 1.3rem;
  margin-bottom: 10px;
}
.feature-card p {
  color: #e0f7fa;
  font-size: 1rem;
}
</style>

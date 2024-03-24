<template>
  <div class="main">
    <div class="main-wrapper">
      <p class="main-title">박찬솔</p>
      <p class="main-subtitle">Chansol Park</p>
    </div>
    <div class="btn main-next" @click="$store.dispatch('next', true); $router.push('/2');">
      <svg width="37" height="42" viewBox="0 0 37 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M33.5 18.4019C35.5 19.5566 35.5 22.4434 33.5 23.5981L6.49999 39.1865C4.5 40.3412 2 38.8979 2 36.5885L2 5.41154C2 3.10214 4.5 1.65876 6.5 2.81347L33.5 18.4019Z"
            stroke="white" stroke-width="4"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;

  position: absolute;
}

.main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 90vh;
}

.main-title {
  margin: 0;
  padding: 0;

  color: white;

  font-family: 'IBM Plex Sans KR', sans-serif;
  font-weight: 700;
  font-size: 60px;
}

.main-subtitle {
  margin: 0;
  padding: 0;

  width: 100%;

  text-align: right;
  color: white;

  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 26px;
}

.main-next {
  position: fixed;
  margin-top: 60vh;
}

@media (max-width: 900px) {
  .main-title {
    font-size: 50px;
  }

  .main-subtitle {
    font-size: 20px;
  }
}
</style>
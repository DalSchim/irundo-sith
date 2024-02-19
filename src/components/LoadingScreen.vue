<script>
export default {
  name: "LoadingScreen.vue"

}
</script>

<template>
  <div class="loader-sec">
    <span class="loader"></span>
    <span class="loader2"></span>
    <h1>Bienvenue sur Irundo veuillez patientée</h1>
  </div>
</template>

<style scoped lang="scss">
.loader-sec{
  z-index: 99999999;
  background-color: #2c3e50;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  h1{
    color: #FFF;
    font-size: 24px;
    font-weight: 600;
    margin-top: 20px;
  }

}
.loader {
  position: relative;
  width: 108px;
  display: flex;
  justify-content: space-between;
}
.loader::after , .loader::before  {
  content: '';
  display: inline-block;
  width: 48px;
  height: 48px;
  background-color: #FFF;
  background-image:  radial-gradient(circle 14px, #0d161b 100%, transparent 0);
  background-repeat: no-repeat;
  border-radius: 50%;
  animation: eyeMove 10s infinite , blink 10s infinite;
}
@keyframes eyeMove {
  0%  , 10% {     background-position: 0px 0px}
  13%  , 40% {     background-position: -15px 0px}
  43%  , 70% {     background-position: 15px 0px}
  73%  , 90% {     background-position: 0px 15px}
  93%  , 100% {     background-position: 0px 0px}
}
@keyframes blink {
  0%  , 10% , 12% , 20%, 22%, 40%, 42% , 60%, 62%,  70%, 72% , 90%, 92%, 98% , 100%
  { height: 48px}
  11% , 21% ,41% , 61% , 71% , 91% , 99%
  { height: 18px}
}


/*--------------------------------*/

.loader2 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  25% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;
  }
  50% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;
  }
  75% {
    box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  100% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
}




</style>
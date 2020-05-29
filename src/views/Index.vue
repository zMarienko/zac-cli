<template>
  <div class="wrapper">
    <Slider />
    <PopularPages />
    <Steps />
    <Employment />
    <Map />
  </div>
</template>

<script>
import Slider from '@/components/Slider';
import PopularPages from '@/components/PopularPages';
import Steps from '@/components/Steps';
import Employment from '@/components/Employment';
import Map from '@/components/Map';

export default {
  name: 'index',
  components: { Slider, PopularPages, Steps, Employment, Map },
};
</script>

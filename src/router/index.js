import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'index',
  component: Index,
},
{
  path: '/error-404',
  name: '404',
  component: () => import('../views/NotFound.vue')
},
{
  path: '/news',
  name: 'news',
  component: () => import('../views/News.vue')
},
{
  path: '/news/:id',
  name: 'post',
  component: () => import('../views/Post.vue')
},
{
  path: '/admin/news/new',
  name: 'new-publication',
  component: () => import('../views/Admin/NewPublication.vue')
},
{
  path: '/studentu/pratsevlashtuvannya',
  name: 'pratsevlashtuvannya',
  component: () => import('../views/Studentu/Pratsevlashtuvannya.vue')
},
{
  path: '/navchalna-robota/navchalni-plany-ta-normatyvni-dokumenty',
  name: 'navchalni-plany-ta-normatyvni-dokumenty',
  component: () => import('../views/NavchalnaRobota/NavchalniPlanyTaNormatyvniDokumenty.vue')
},
{
  path: '/navchalna-robota/tsyklovi-komisiyi',
  name: 'tsyklovi-komisiyi',
  component: () => import('../views/NavchalnaRobota/TsykloviKomisiyi.vue')
},
{
  path: '/navchalna-robota/ptsk-suspilno-politychnykh-dystsyplin',
  name: 'ptsk-suspilno-politychnykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskSuspilnoPolitychnykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-filolohichnykh-dystsyplin',
  name: 'ptsk-filolohichnykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskFilolohichnykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-fizyko-matematychnykh-dystsyplin',
  name: 'ptsk-fizyko-matematychnykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskFizykoMatematychnykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-fizkulturnykh-dystsyplin',
  name: 'ptsk-fizkulturnykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskFizkulturnykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-metalurhiynykh-dystsyplin',
  name: 'ptsk-metalurhiynykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskMetalurhiynykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-aviakonstruktorskykh-dystsyplin',
  name: 'ptsk-aviakonstruktorskykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskAviakonstruktorskykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-spetstekhnolohichnykh-dystsyplin',
  name: 'ptsk-spetstekhnolohichnykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskSpetstekhnolohichnykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-ekonomichnykh-dystsyplin',
  name: 'ptsk-ekonomichnykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskEkonomichnykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-kompyuternykh-dystsyplin',
  name: 'ptsk-kompyuternykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskKompyuternykhDystsyplin.vue')
},
{
  path: '/navchalna-robota/ptsk-elektrotekhnichnykh-dystsyplin',
  name: 'ptsk-elektrotekhnichnykh-dystsyplin',
  component: () => import('../views/NavchalnaRobota/PtskElektrotekhnichnykhDystsyplin.vue')
},
{
  path: '/pro-koledzh/istoriya-koledzhu',
  name: 'istoriya-koledzhu',
  component: () => import('../views/ProKoledzh/IstoriyaKoledzhu.vue')
},
{
  path: '/pro-koledzh/hurtozhytok',
  name: 'hurtozhytok',
  component: () => import('../views/ProKoledzh/Hurtozhytok.vue')
},
{
  path: '/pro-koledzh/baza-vidpochynku',
  name: 'baza-vidpochynku',
  component: () => import('../views/ProKoledzh/BazaVidpochynku.vue')
},
{
  path: '/pro-koledzh/psykholohichna-sluzhba',
  name: 'baza-vidpochynku',
  component: () => import('../views/ProKoledzh/PsykholohichnaSluzhba.vue')
},
{
  path: '/pro-koledzh/sportyvne-zhyttya',
  name: 'sportyvne-zhyttya',
  component: () => import('../views/ProKoledzh/SportyvneZhyttya.vue')
},
{
  path: '/pro-koledzh/kerivnytstvo',
  name: 'kerivnytstvo',
  component: () => import('../views/ProKoledzh/Kerivnytstvo.vue')
},
{
  path: '/pro-koledzh/normatyvni-dokumenty',
  name: 'normatyvni-dokumenty',
  component: () => import('../views/ProKoledzh/NormatyvniDokumenty.vue')
},
  //{
  //  path: '*',
  //  redirect: '/error-404',
  //},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
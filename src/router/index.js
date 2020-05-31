import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/Index.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'index',
  component: Index,
},
{
  path: '/error-404',
  name: '404',
  component: () => import('@/views/NotFound.vue')
},
{
  path: '/news',
  name: 'news',
  component: () => import('@/views/News.vue')
},
{
  path: '/news/:id',
  name: 'post',
  component: () => import('@/views/Post.vue')
},
{
  path: '/admin/news/new',
  name: 'new-publication',
  component: () => import('@/views/Admin/NewPublication.vue')
},
{
  path: '/specialty/',
  name: 'specialty',
  component: () => import('@/views/Spetsialnosti/Spetsialnosti.vue')
},
{
  path: '/abituriyent/',
  name: 'abituriyent',
  component: () => import('@/views/Abituriyentu/Abituriyentu.vue')
},
{
  path: '/student/',
  name: 'student',
  component: () => import('@/views/Studentu/Studentu.vue')
},
{
  path: '/methodical-cabinet/',
  name: 'methodical-cabinet',
  component: () => import('@/views/MetodychnyyKabinet/MetodychnyyKabinet.vue')
},
{
  path: '/educational-work/',
  name: 'educational-work',
  component: () => import('@/views/NavchalnaRobota/NavchalnaRobota.vue')
},
{
  path: '/about/',
  name: 'about',
  component: () => import('@/views/ProKoledzh/ProKoledzh.vue')
},
{
  path: '/specialty/aviatsiyna-ta-raketno-kosmichna-tekhnika',
  name: 'aviatsiyna-ta-raketno-kosmichna-tekhnika',
  component: () => import('@/views/Spetsialnosti/AviatsiynaTaRaketnoKosmichnaTekhnika.vue')
},
{
  path: '/specialty/haluzeve-mashynobuduvannya',
  name: 'haluzeve-mashynobuduvannya',
  component: () => import('@/views/Spetsialnosti/HaluzeveMashynobuduvannya.vue')
},
{
  path: '/specialty/metalurhiya',
  name: 'metalurhiya',
  component: () => import('@/views/Spetsialnosti/Metalurhiya.vue')
},
{
  path: '/specialty/prykladna-mekhanika',
  name: 'prykladna-mekhanika',
  component: () => import('@/views/Spetsialnosti/PrykladnaMekhanika.vue')
},
{
  path: '/specialty/kompyuterni-nauky-ta-informatsiyni-tekhnolohiyi',
  name: 'kompyuterni-nauky-ta-informatsiyni-tekhnolohiyi',
  component: () => import('@/views/Spetsialnosti/KompyuterniNaukyTaInformatsiyniTekhnolohiyi.vue')
},
{
  path: '/specialty/kompyuterna-inzheneriya',
  name: 'kompyuterna-inzheneriya',
  component: () => import('@/views/Spetsialnosti/KompyuternaInzheneriya.vue')
},
{
  path: '/specialty/ekonomika',
  name: 'ekonomika',
  component: () => import('@/views/Spetsialnosti/Ekonomika.vue')
},
{
  path: '/abituriyent/pidhotovchi-kursy',
  name: 'pidhotovchi-kursy',
  component: () => import('@/views/Abituriyentu/PidhotovchiKursy.vue')
},
{
  path: '/abituriyent/pravyla-pryyomu',
  name: 'pravyla-pryyomu',
  component: () => import('@/views/Abituriyentu/PravylaPryyomu.vue')
},
{
  path: '/abituriyent/vstupna-kompaniya',
  name: 'vstupna-kompaniya',
  component: () => import('@/views/Abituriyentu/VstupnaKompaniya.vue')
},
{
  path: '/abituriyent/den-vidkrytykh-dverey',
  name: 'den-vidkrytykh-dverey',
  component: () => import('@/views/Abituriyentu/DenVidkrytykhDverey.vue')
},
{
  path: '/abituriyent/prohrama-vstupnykh-ispytiv',
  name: 'prohrama-vstupnykh-ispytiv',
  component: () => import('@/views/Abituriyentu/ProhramaVstupnykhIspytiv.vue')
},
{
  path: '/abituriyent/fakhovi-vyprobuvannya',
  name: 'fakhovi-vyprobuvannya',
  component: () => import('@/views/Abituriyentu/FakhoviVyprobuvannya.vue')
},
{
  path: '/abituriyent/vartist-navchannya',
  name: 'vartist-navchannya',
  component: () => import('@/views/Abituriyentu/VartistNavchannya.vue')
},
{
  path: '/abituriyent/reytynhovi-spysky',
  name: 'reytynhovi-spysky',
  component: () => import('@/views/Abituriyentu/ReytynhoviSpysky.vue')
},
{
  path: '/abituriyent/stypendialne-zabezpechennya',
  name: 'stypendialne-zabezpechennya',
  component: () => import('@/views/Abituriyentu/StypendialneZabezpechennya.vue')
},
{
  path: '/student/pratsevlashtuvannya',
  name: 'pratsevlashtuvannya',
  component: () => import('@/views/Studentu/Pratsevlashtuvannya.vue')
},
{
  path: '/student/elektronni-pidruchnyky',
  name: 'elektronni-pidruchnyky',
  component: () => import('@/views/Studentu/ElektronniPidruchnyky.vue')
},
{
  path: '/student/hurtky',
  name: 'hurtky',
  component: () => import('@/views/Studentu/Hurtky.vue')
},
{
  path: '/student/rekvizyty-oplaty',
  name: 'rekvizyty-oplaty',
  component: () => import('@/views/Studentu/RekvizytyOplaty.vue')
},
{
  path: '/methodical-cabinet/atestatsiya-vykladachiv',
  name: 'atestatsiya-vykladachiv',
  component: () => import('@/views/MetodychnyyKabinet/AtestatsiyaVykladachiv.vue')
},
{
  path: '/methodical-cabinet/vnutrishni-polozhennya-koledzhu',
  name: 'vnutrishni-polozhennya-koledzhu',
  component: () => import('@/views/MetodychnyyKabinet/VnutrishniPolozhennyaKoledzhu.vue')
},
{
  path: '/methodical-cabinet/zrazky-dokumentiv',
  name: 'zrazky-dokumentiv',
  component: () => import('@/views/MetodychnyyKabinet/ZrazkyDokumentiv.vue')
},
{
  path: '/methodical-cabinet/normatyvni-akty',
  name: 'normatyvni-akty',
  component: () => import('@/views/MetodychnyyKabinet/NormatyvniAkty.vue')
},
{
  path: '/educational-work/navchalni-plany-ta-normatyvni-dokumenty',
  name: 'navchalni-plany-ta-normatyvni-dokumenty',
  component: () => import('@/views/NavchalnaRobota/NavchalniPlanyTaNormatyvniDokumenty.vue')
},
{
  path: '/educational-work/tsyklovi-komisiyi',
  name: 'tsyklovi-komisiyi',
  component: () => import('@/views/NavchalnaRobota/TsykloviKomisiyi.vue')
},
{
  path: '/educational-work/ptsk-suspilno-politychnykh-dystsyplin',
  name: 'ptsk-suspilno-politychnykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskSuspilnoPolitychnykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-filolohichnykh-dystsyplin',
  name: 'ptsk-filolohichnykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskFilolohichnykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-fizyko-matematychnykh-dystsyplin',
  name: 'ptsk-fizyko-matematychnykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskFizykoMatematychnykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-fizkulturnykh-dystsyplin',
  name: 'ptsk-fizkulturnykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskFizkulturnykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-metalurhiynykh-dystsyplin',
  name: 'ptsk-metalurhiynykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskMetalurhiynykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-aviakonstruktorskykh-dystsyplin',
  name: 'ptsk-aviakonstruktorskykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskAviakonstruktorskykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-spetstekhnolohichnykh-dystsyplin',
  name: 'ptsk-spetstekhnolohichnykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskSpetstekhnolohichnykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-ekonomichnykh-dystsyplin',
  name: 'ptsk-ekonomichnykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskEkonomichnykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-kompyuternykh-dystsyplin',
  name: 'ptsk-kompyuternykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskKompyuternykhDystsyplin.vue')
},
{
  path: '/educational-work/ptsk-elektrotekhnichnykh-dystsyplin',
  name: 'ptsk-elektrotekhnichnykh-dystsyplin',
  component: () => import('@/views/NavchalnaRobota/PtskElektrotekhnichnykhDystsyplin.vue')
},
{
  path: '/educational-work/denne-viddilennya',
  name: 'denne-viddilennya',
  component: () => import('@/views/NavchalnaRobota/DenneViddilennya.vue')
},
{
  path: '/educational-work/zaochne-viddilennya',
  name: 'zaochne-viddilennya',
  component: () => import('@/views/NavchalnaRobota/ZaochneViddilennya.vue')
},
{
  path: '/about/istoriya-koledzhu',
  name: 'istoriya-koledzhu',
  component: () => import('@/views/ProKoledzh/IstoriyaKoledzhu.vue')
},
{
  path: '/about/hurtozhytok',
  name: 'hurtozhytok',
  component: () => import('@/views/ProKoledzh/Hurtozhytok.vue')
},
{
  path: '/about/baza-vidpochynku',
  name: 'baza-vidpochynku',
  component: () => import('@/views/ProKoledzh/BazaVidpochynku.vue')
},
{
  path: '/about/psykholohichna-sluzhba',
  name: 'psykholohichna-sluzhba',
  component: () => import('@/views/ProKoledzh/PsykholohichnaSluzhba.vue')
},
{
  path: '/about/sportyvne-zhyttya',
  name: 'sportyvne-zhyttya',
  component: () => import('@/views/ProKoledzh/SportyvneZhyttya.vue')
},
{
  path: '/about/kerivnytstvo',
  name: 'kerivnytstvo',
  component: () => import('@/views/ProKoledzh/Kerivnytstvo.vue')
},
{
  path: '/about/normatyvni-dokumenty',
  name: 'normatyvni-dokumenty',
  component: () => import('@/views/ProKoledzh/NormatyvniDokumenty.vue')
},

{
  path: '*',
  redirect: '/error-404',
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
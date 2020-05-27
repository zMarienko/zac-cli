<template>
  <section class="map">
    <div class="container">
      <div class="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10408.349417814417!2d35.205498351834336!3d47.833117447902694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87738ea3e9356f1c!2z0JDQstC40LDRhtC40L7QvdC90YvQuSDQmtC-0LvQu9C10LTQtiDQuNC80LXQvdC4INCQLtCTLiDQmNCy0YfQtdC90LrQvi4!5e0!3m2!1sru!2sua!4v1588949550323!5m2!1sru!2sua"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.google-map {
  margin: 10px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  iframe {
    width: 100%;
    min-height: 300px;
  }
}
</style>


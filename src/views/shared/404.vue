<template>
  <div class="hero__bg">
    <div class="hero__bg" style="font-family:-apple-system, BlinkMacSystemFont, Roboto, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Avenir, &quot;Helvetica Neue&quot;, &quot;Lucida Grande&quot;, sans-serif;height:100vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center">
      <div>
        <h1 class="next-error-h1" style="display:inline-block;margin:0;margin-right:20px;padding:10px 23px 10px 0;font-size:24px;font-weight:500;vertical-align:top">
          404
        </h1>
        <div style="display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle">
          <h2 style="font-size:14px;font-weight:normal;line-height:inherit;margin:0;padding:0">
            Oups ! Cette page est introuvable ‼️
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style scoped>
  body { margin: 0; color: #000; background: #fff; }
  .next-error-h1 {
    border-right: 1px solid rgba(0, 0, 0, .3);
  }
  @media (prefers-color-scheme: dark) {
    body { color: #fff; background: #000; }
    .next-error-h1 {
      border-right: 1px solid rgba(255, 255, 255, .3);
    }
  }
</style>

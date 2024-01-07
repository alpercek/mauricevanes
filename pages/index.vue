<template>
  
  <div class="lg:pl-24 lg:pr-24 pt-4">
    <div class="flex justify-between p-2"><p>Pip Passchier</p><div class="flex"><p class="mr-4">WORKS</p><p class="mr-4">PROJECTS</p><p>ABOUT</p></div></div>
    <div class="text-center bg-white rounded-xl shadow-md">
      <h1 class="blog-title">
        {{ $prismic.asText(teaser.title)}}
      </h1>
      <div class="py-8 px-8 mx-auto space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6">
        <nuxt-img
          provider="prismic"
          class="lg:w-3/5 md:w-1/2 sm:w-1/2 w-full"
          sizes="xl:60vw, lg:60vw, md:50vw, sm:90vw, xs:90vw"
          :src="teaser.heroimage.url"
          fit="crop"
          :modifiers="{ crop: 'faces,edges', ar: '1.8:1', ch: 'dpr,width'}"
        />
        <div class="text-center space-y-2">
          <div class="space-y-0.5">
          <p class="blog-description inline">{{ $prismic.asText(teaser.content)}}</p> 
          </div>
        </div>
      </div>
    </div>
    <div v-if="posts.length !== 0" class="flex flex-wrap">
      <div v-for="post in posts" :key="post.id" v-bind:post="post" class="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
        <h2>{{ $prismic.asText(post.data.title) }}</h2>
        <nuxt-img
          provider="prismic"
          loading="lazy"
          sizes="xl:30vw, lg:40vw, md:90vw, sm:90vw, xs:90vw"
          :src="post.data.heroimage.url"
          fit="crop"
          :modifiers="{ crop: 'faces,edges', ar: '1.8:1', ch: 'dpr,width'}"
        />
        <p>{{ $prismic.asText(post.data.content) }}</p>
      </div>
    </div>
      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  head () {
    return {
      title: 'Prismic Nuxt.js Blog',
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      // Query to get blog teaser
      const teaser = (await $prismic.api.getSingle('teaser')).data
      // Returns data to be used in template
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post")
      )
      return {
        teaser,
        posts: blogPosts.results,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

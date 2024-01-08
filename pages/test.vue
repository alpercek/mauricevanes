<template>
    <div>
      <main>
      <section class="products"></section>
    </main>

    <footer>
    </footer>

    <template id="product">
      <div class="product">
        <img src="" alt="" />
        <h2>name</h2>
        <p class="description">description</p>
        <p class="price">price</p>
        <form @submit="handleSubmit($event)" action="/.netlify/functions/create-checkout" method="post">
          <label for="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value="1"
            min="1"
            max="10"
          />
          <input type="hidden" name="sku" value="DEMO002" />
          <button type="submit">Buy Now Alper</button>
        </form>
      </div>
    </template>
    </div>
  </template>
  
  <script>
  import { doc } from 'prettier'
  import { components } from '~/slices'
  
  export default {
    async asyncData ({ $prismic, store }) {
      const page = await $prismic.api.getByUID('page', 'home')
      await store.dispatch('prismic/load')
      return {
        page
      }
    },

    data () {
      return { components, 
      }
      
    },
    head () {
      return {
        title: this.$prismic.asText(this.page.data.title)
      }
    },
    methods: {
        format(amount, currency) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency,
        }).format((amount / 100).toFixed(2));
      },
        async handleSubmit(event) {
        event.preventDefault();
        document
          .querySelectorAll('button')
          .forEach((button) => (button.disabled = true));

        const form = new FormData(event.target);
        const data = [{
          sku: form.get('sku'),
          quantity: Number(form.get('quantity')),
        }, {sku: 'DEMO001', quantity: '2' }];

        const response = await fetch('/.netlify/functions/create-checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then((res) => res.json());

        const stripe = Stripe(response.publishableKey);
        const { error } = await stripe.redirectToCheckout({
          sessionId: response.sessionId,
        });

        if (error) {
          document
            .querySelectorAll('button')
            .forEach((button) => (button.disabled = false));
          console.error(error);
        }
      },
  },
  mounted(){
    }
  }
  </script>
  
const { createApp, ref } = Vue;

const app = createApp({
  // template: `
  //   <h1>{{ message }}</h1>
  //   <p>- {{ author }}</p>
  // `,

  setup() {
    const message = ref("I'm Batman");
    const author = ref("Batman");

    const changeQuote = () => {
      message.value = "Hola, soy Goku";
      author.value = "Goku";
    };

    return {
      author,
      message,
      changeQuote,
    };
  },
});

app.mount("#myApp");

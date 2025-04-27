const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    supportFile: 'cypress/support/e2e.js',

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // Define o padrão de arquivos que o Cypress deve considerar como testes. Útil se você usa TypeScript ou estrutura em pastas.

    fixturesFolder: 'cypress/fixtures',
    // Pasta onde ficam os arquivos de dados estáticos (mock de respostas, dados de login, etc.).

    screenshotsFolder: 'cypress/screenshots',
    // Define a pasta onde os screenshots dos testes com falha serão salvos automaticamente.

    videosFolder: 'cypress/videos',
    // Define a pasta onde os vídeos das execuções de teste serão salvos.

    video: true,
    // Habilita a gravação de vídeo dos testes — útil para depuração.

    chromeWebSecurity: false,
    // Desativa algumas políticas de segurança do navegador (como CORS). Pode ser necessário dependendo da aplicação testada.

    retries: {
      runMode: 2,
      openMode: 0
    },
    // Tenta reexecutar testes falhos até 2 vezes no modo CLI (útil em pipelines CI).

    setupNodeEvents(on, config) {
      // Função para configurar eventos personalizados, como tarefas ou plugins.
      // Exemplo: console.log('Cypress configurado!');
    },
  },
});

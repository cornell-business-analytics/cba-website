function main() {
  particlesJS.load('particles-js', 'https://cornell-business-analytics.github.io/cba-website/assets/json/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}

$(document).ready(main())

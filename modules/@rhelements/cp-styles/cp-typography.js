import './custom-style-interface.min.js';

(function () {
  const templateId = 'cp-typography-head';

  if (document.getElementById(templateId)) {
    return;
  }

  const cpstylesTemplate = document.createElement('div');

  cpstylesTemplate.setAttribute('style', 'display: none;');
  cpstylesTemplate.setAttribute('id', templateId);

  cpstylesTemplate.innerHTML = `
    <style id="${templateId}-style">:root {

  --font-size: 16px;
  --line-height: 1.5em;
  --font-family: "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif;
  --code-font-family: Consolas, Monaco, "Andale Mono", monospace;
  --font-weight: 400;
  --heading-font-weight: 600;
  --h1-font-size: 24px;
  --h2-font-size: 21px;
  --h3-font-size: 18px;
  --h4-font-size: 16px;
  --h5-font-size: 16px;
  --h6-font-size: 14px;
  --alt-h1-font-size: 30px;
  --alt-h2-font-size: 26px;
  --alt-h3-font-size: 20px;
  --alt-h4-font-size: 18px;
  --alt-h5-font-size: 16px;
  --alt-h6-font-size: 14px;
  --paragraph-margin-bottom: var(--font-size, 16px);
  --heading-margin-top: 1em;
  --heading-margin-bottom: 10px; }

body {
  font-family: var(--font-family, "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif);
  font-size: var(--font-size, 16px);
  line-height: var(--line-height, 1.5em);
  font-weight: var(--font-weight, 400);
  color: var(--text-color, #333);
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased; }

p {
  margin-top: 1em;
  margin-bottom: var(--paragraph-margin-bottom, 1em); }

h1, h2, h3, h4, h5, h6 {
  margin-top: var(--heading-margin-top, 1em);
  margin-bottom: var(--heading-margin-bottom, 10px);
  font-weight: var(--heading-font-weight, 600);
  line-height: var(--line-height, 1.5em);
  text-rendering: auto; }

h1 {
  font-size: var(--h1-font-size, 24px); }

h2 {
  font-size: var(--h2-font-size, 21px); }

h3 {
  font-size: var(--h3-font-size, 18px); }

h4 {
  font-size: var(--h4-font-size, 16px); }

h5 {
  font-size: var(--h5-font-size, 16px); }

h6 {
  font-size: var(--h6-font-size, 14px); }</style>
  `;

  document.head.appendChild(cpstylesTemplate);

  if (window.ShadyCSS) {
    window.ShadyCSS.CustomStyleInterface.addCustomStyle(document.querySelector(`#${templateId}-style`));
  }
}());

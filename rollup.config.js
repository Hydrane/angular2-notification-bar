export default {
  entry: './release/index.js',
  dest: './release/bundles/angular2-notification-bar.umd.js',
  format: 'umd',
  moduleName: 'angular2-notification-bar',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common'
  }
}
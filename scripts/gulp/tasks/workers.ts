import { task, src, dest } from 'gulp';


task('workers.release', (done: Function) => {

});

task('workers.e2e', (done: Function) => {
  return src('scripts/polyfill/readme.md')
    .pipe(dest('dist/ionic-angular/polyfills/'), done);
});

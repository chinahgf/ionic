import { task, src, dest } from 'gulp';
import { join } from 'path';
import { DIST_E2E_ROOT, WORKERS_SRC } from '../constants';

const WORKER_FILES = join(WORKERS_SRC, '**', '*.js');


task('release.workers', (done: Function) => {

});


task('e2e.workers', (done: Function) => {
  const workersDesc = join(DIST_E2E_ROOT, 'workers');
  return src(WORKER_FILES)
    .pipe(dest(workersDesc), done);
});

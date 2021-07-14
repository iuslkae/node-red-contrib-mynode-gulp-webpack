import { readFileSync } from 'fs';
import { task, src, dest } from 'gulp';
import replace from 'gulp-replace';
import { format } from 'gulp-plugin-prettier';

task('default', (cb) => {
  src('src/**/*.html', { base: 'src' })
    .pipe(
      replace(
        /<script(.*?)src="(.*?)"(.*?)>(.*?)<\/script>/gs,
        function (match, p1, p2, p3, p4) {
          return `<script${p1}${p3}>${readFileSync(
            'dist/src/' + p2,
            'utf-8',
          )}</script>`;
        },
      ),
    )
    .pipe(format())
    .pipe(dest('dist/src'));
  cb();
});

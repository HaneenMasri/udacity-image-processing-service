import Jasmine from 'jasmine';
import { SpecReporter } from 'jasmine-spec-reporter';

const jasmine = new Jasmine();

jasmine.loadConfig({
    spec_dir: 'dist/tests',
    spec_files: ['**/*[sS]pec.js'],
    random: false
});

jasmine.env.clearReporters();
jasmine.addReporter(new SpecReporter({
    spec: {
        displayPending: true,
        displayStacktrace: 'none'
    },
    summary: {
        displayDuration: true
    }
}));

jasmine.execute();
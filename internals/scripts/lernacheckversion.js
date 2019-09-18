const exec = require('child_process').exec;
const semver = require('semver');
const pkg = require('../../package.json');
const { lerna } = pkg.peerDependencies;

if (!lerna) {
  throw new Error('[ERROR: React Mono] Expected a lerna version to be defined in root pkg.peerDependencies');
}

const range = semver.validRange(lerna);

exec('lerna -v', function(err, stdout, stderr) {
  if (err) throw err;
  if (!semver.satisfies(stdout, range)) {
    throw new Error(`[ERROR: React Mono] You need lerna version ${lerna}. Try running \`yarn global add lerna@${lerna}\``);
    process.exit(1);
  }
});

import simpleGit, {SimpleGit} from 'simple-git';
const git: SimpleGit = simpleGit();

const starterPath = 'https://github.com/jiqiang90/subql-starter';
const localPath = `${process.cwd()}/subql-starter`;

export async function getStarter(): Promise<void> {
  try {
    await git.clone(starterPath, localPath);
  } catch (e) {
    /* handle all errors here */
  }
}
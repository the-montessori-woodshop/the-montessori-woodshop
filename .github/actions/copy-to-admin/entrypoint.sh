#!/bin/sh -l

set -e  # if a command fails it stops the execution
set -u  # script fails if trying to access to an undefined variable

echo "[+] Action start"

CLONE_DIR=$(mktemp -d)
echo "[+] Cloning destination git repository 'the-montessori-woodshop/woodshop-admin'"

# Setup git
git config --global user.email drewdecarme@gmail.com
git config --global user.name Drew DeCarme

{
	git clone --single-branch --branch main "https://drewdecarme:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/woodshop-admin.git" "$CLONE_DIR"
} || {
	echo "::error::Could not clone the destination repository. Command:"
	echo "::error::git clone --single-branch --branch main https://drewdecarme:the_api_token@github.com/the-montessori-woodshop/woodshop-admin.git $CLONE_DIR"
	echo "::error::(Note that the USER_NAME and API_TOKEN_GITHUB is redacted by GitHub)"
	echo "::error::Please verify that the target repository exist AND that it contains the destination branch name, and is accesible by the API_TOKEN_GITHUB"
	exit 1

}
ls -la "$CLONE_DIR"

TEMP_DIR=$(mktemp -d)

mv "$CLONE_DIR/.git" "$TEMP_DIR/.git"

echo "[+] Deleting clone dir/"
rm -rf "$CLONE_DIR"

echo "[+] Creating (now empty) clone dir/"
mkdir -p "$CLONE_DIR"

echo "[+] Listing Current Directory Location"
ls -al

echo "[+] Moving files and directories..."
mv "$TEMP_DIR/.git" "$CLONE_DIR/.git"
mv "package.json" "$CLONE_DIR/package.json"
mkdir "$CLONE_DIR/packages/medusa-admin"
cp -ra "packages/medusa-admin"/. "$CLONE_DIR/packages/medusa-admin"

cd "$CLONE_DIR"

echo "[+] Files that will be pushed"
ls -la

ORIGIN_COMMIT="https://github.com/$GITHUB_REPOSITORY/commit/$GITHUB_SHA"
COMMIT_MESSAGE="${COMMIT_MESSAGE/ORIGIN_COMMIT/$ORIGIN_COMMIT}"
COMMIT_MESSAGE="${COMMIT_MESSAGE/\$GITHUB_REF/$GITHUB_REF}"

echo "[+] Adding git commit"
git add .

echo "[+] git status:"
git status

echo "[+] git diff-index:"
# git diff-index : to avoid doing the git commit failing if there are no changes to be commit
git diff-index --quiet HEAD || git commit --message "$COMMIT_MESSAGE"

echo "[+] Pushing git commit"
# --set-upstream: sets de branch when pushing to a branch that does not exist
git push "https://drewdecarme:$API_TOKEN_GITHUB@github.com/the-montessori-woodshop/wodshop_admin.git" --set-upstream "main"
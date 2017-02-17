export PATH=/usr/local/bin:$PATH
git add .
#git stash -q --keep-index
cd .
./run_tests.sh
RESULT=$?
#git stash pop -q
[ $RESULT -ne 0 ] && exit 1
exit 0

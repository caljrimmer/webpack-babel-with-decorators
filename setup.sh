curl -O -L https://npmjs.org/install.sh
sudo sh install.sh
rm install.sh

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 6.2.2

echo 'NPM Version now ::::: ' && npm -v
echo 'Node Version now ::::: ' && node -v
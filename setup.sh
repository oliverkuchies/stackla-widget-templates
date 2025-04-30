echo "Setting up the project..."
echo "Initialising submodules..."
git submodule init
git submodule update --remote --recursive
echo "Installing dependencies..."
npm install
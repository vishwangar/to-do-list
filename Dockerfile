From node:22
workdir /app
copy . .
run npm install --force
expose 3000
cmd ["npm", "start"]
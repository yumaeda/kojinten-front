# tokyo-hideaway-front
Repository for Tokyo Hideaway Frontend

## How to Use
### 1. Setup Mac
Refer to [mac](https://github.com/yumaeda/mac) repository.

### 2. Install required modules
```bash
npm install
```

### 3. Run code formatter & linter
```bash
npm run fix
```

### 4. Compile
```bash
npm run build
```

### 5.a. Run locally
```bash
npm start
```

### 5.a. Run locally via Docker

```bash
docker build -t kojinten-front:latest .
docker run --rm -p 8080:80 kojinten-front:latest
```

### 6. Test
Open the below URL:
```
http://localhost:8080
```

### 7. Login to the nginx container
```bash
docker exec -it <CONTAINER_ID> sh
```

### 8. Push Docker image to the Docker Hub
```bash
docker login
docker push yumaeda/kojinten-front:latest
```

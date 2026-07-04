# SACCO Management System - Setup Guide

## Prerequisites

- Node.js v18 or higher
- npm or yarn
- PostgreSQL 14 or higher
- Docker and Docker Compose (optional)

## Quick Start with Docker

### 1. Clone the Repository

```bash
git clone https://github.com/pato2516/sacco-management-system.git
cd sacco-management-system
```

### 2. Create Environment Configuration

```bash
cp backend/.env.example backend/.env
```

### 3. Start the Application

```bash
docker-compose up -d
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs
- **Database**: localhost:5432

## Manual Setup (Without Docker)

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your database credentials
# Then run migrations
npm run migrate:latest

# Start the server
npm run dev
```

The backend will be available at `http://localhost:5000`

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will open at `http://localhost:3000`

## Database Setup

### With Docker

PostgreSQL starts automatically with Docker Compose. Connect using:

```
Host: localhost
Port: 5432
Username: sacco_user
Password: sacco_password
Database: sacco_db
```

### Manual PostgreSQL

```bash
# Create database
createdb -U postgres sacco_db

# Create user
psql -U postgres -d sacco_db -c "CREATE USER sacco_user WITH PASSWORD 'sacco_password';"

# Grant privileges
psql -U postgres -d sacco_db -c "GRANT ALL PRIVILEGES ON DATABASE sacco_db TO sacco_user;"
```

## Stopping the Application

### With Docker

```bash
docker-compose down
```

### Manual

Stop the Node.js processes manually or use:

```bash
# Kill processes on port 5000 (backend)
kill $(lsof -t -i :5000)

# Kill processes on port 3000 (frontend)
kill $(lsof -t -i :3000)
```

## Troubleshooting

### Port Already in Use

If ports are already in use, either:
- Stop the conflicting services
- Modify `docker-compose.yml` to use different ports

### Database Connection Error

1. Verify PostgreSQL is running
2. Check .env credentials
3. Ensure database exists

### Dependency Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Read the [Architecture Guide](./ARCHITECTURE.md)
2. Review [API Documentation](./API.md)
3. Check [Development Guide](./DEVELOPMENT.md)

# SACCO Management System

A comprehensive, enterprise-grade management platform for Savings and Credit Cooperative Organizations (SACCOs). This system streamlines member management, loan processing, savings tracking, and financial operations with an intuitive interface and robust backend infrastructure.

## 🎯 Key Features

### Member Management
- Complete member registration and onboarding
- KYC (Know Your Customer) verification workflow
- Member profiles with contact information
- Membership status tracking
- Member communication and notifications

### Savings Management
- Member savings account creation and management
- Deposit and withdrawal tracking
- Real-time balance updates
- Savings statement generation
- Interest accrual on savings

### Loan Management
- Online loan application processing
- Automated loan approval workflows
- Flexible loan products with configurable terms
- Loan disbursement tracking
- Loan repayment management with amortization schedules
- Late payment tracking and penalties

### Financial Operations
- Automated interest and dividend calculations
- Multi-currency transaction support (extensible)
- Complete transaction audit trail
- Bank reconciliation features
- Financial statement generation

### Reporting & Analytics
- Comprehensive financial reports
- Member analytics and insights
- Loan portfolio analysis
- Treasury and liquidity reports
- Customizable dashboards
- Export to PDF and Excel formats

### Security & Access Control
- Role-based access control (Admin, Manager, Staff, Member)
- JWT-based authentication
- Password encryption and security policies
- Activity logging and audit trails
- Multi-level approval workflows

## 🏗️ Technology Stack

### Backend
- **Runtime**: Node.js v18+
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Sequelize
- **Database**: PostgreSQL 14+
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Joi
- **Security**: Helmet, CORS, Bcrypt
- **API Documentation**: Swagger/OpenAPI
- **Logging**: Winston

### Frontend
- **Library**: React 18+
- **Language**: TypeScript
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **State Management**: Context API
- **Styling**: CSS3 with responsive design

### DevOps & Infrastructure
- **Containerization**: Docker & Docker Compose
- **Database**: PostgreSQL 14+ (Alpine)
- **Development**: Hot reload with ts-node-dev

## 📁 Project Structure

```
sacco-management-system/
├── backend/
│   ├── src/
│   │   ├── app.ts                    # Express application entry point
│   │   ├── config/                   # Configuration modules
│   │   │   ├── database.ts          # Database connection setup
│   │   │   ├── logger.ts            # Winston logger configuration
│   │   │   └── constants.ts         # Application constants
│   │   ├── controllers/              # Request handlers
│   │   │   ├── authController.ts
│   │   │   ├── memberController.ts
│   │   │   ├── loanController.ts
│   │   │   └── transactionController.ts
│   │   ├── models/                   # Sequelize database models
│   │   │   ├── User.ts
│   │   │   ├── Member.ts
│   │   │   ├── Loan.ts
│   │   │   └── Transaction.ts
│   │   ├── routes/                   # API route definitions
│   │   │   ├── auth.ts
│   │   │   ├── members.ts
│   │   │   ├── loans.ts
│   │   │   └── transactions.ts
│   │   ├── services/                 # Business logic layer
│   │   │   ├── authService.ts
│   │   │   ├── memberService.ts
│   │   │   ├── loanService.ts
│   │   │   └── transactionService.ts
│   │   ├── middleware/               # Custom Express middleware
│   │   │   ├── authMiddleware.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── validation.ts
│   │   ├── utils/                    # Utility functions and helpers
│   │   │   ├── helpers.ts
│   │   │   ├── validators.ts
│   │   │   └── errors.ts
│   │   └── database/
│   │       └── migrations/           # Database migration scripts
│   ├── .env.example                  # Environment variables template
│   ├── package.json                  # Node dependencies
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── Dockerfile                    # Backend container image
│   └── jest.config.js               # Test configuration
├── frontend/
│   ├── src/
│   │   ├── App.tsx                   # Root React component
│   │   ├── components/               # Reusable React components
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MemberForm.tsx
│   │   │   └── LoanForm.tsx
│   │   ├── pages/                    # Page-level components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Members.tsx
│   │   │   ├── Loans.tsx
│   │   │   └── Reports.tsx
│   │   ├── services/                 # API service layer
│   │   │   ├── api.ts
│   │   │   ├── memberService.ts
│   │   │   └── loanService.ts
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useMember.ts
│   │   │   └── useLoan.ts
│   │   ├── context/                  # Context API providers
│   │   │   ├── AuthContext.tsx
│   │   │   └── DataContext.tsx
│   │   ├── types/                    # TypeScript type definitions
│   │   │   ├── member.ts
│   │   │   ├── loan.ts
│   │   │   └── transaction.ts
│   │   └── utils/                    # Frontend utilities
│   │       └── helpers.ts
│   ├── public/                       # Static assets
│   ├── package.json                  # Node dependencies
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── Dockerfile                    # Frontend container image
│   └── jest.config.js               # Test configuration
├── docs/
│   ├── SETUP.md                      # Installation and setup guide
│   ├── ARCHITECTURE.md               # System architecture documentation
│   ├── API.md                        # API endpoint documentation
│   ├── DEVELOPMENT.md                # Development guidelines
│   ├── DATABASE.md                   # Database schema documentation
│   └── DEPLOYMENT.md                 # Production deployment guide
├── docker-compose.yml                # Multi-container Docker setup
├── .gitignore                        # Git ignore rules
├── LICENSE                           # MIT License
└── README.md                         # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js v18 or higher
- npm or yarn package manager
- Docker and Docker Compose (optional but recommended)
- PostgreSQL 14+ (if running locally without Docker)

### Option 1: Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/pato2516/sacco-management-system.git
cd sacco-management-system

# Create environment configuration
cp backend/.env.example backend/.env

# Start all services with Docker Compose
docker-compose up -d

# Verify all services are running
docker-compose ps
```

**Access the application:**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs
- **Database**: PostgreSQL on localhost:5432

### Option 2: Manual Setup

#### Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your database credentials

# Build TypeScript
npm run build

# Run database migrations
npm run migrate:latest

# Start development server (with hot reload)
npm run dev
```

Backend will run at `http://localhost:5000`

#### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Frontend will automatically open at `http://localhost:3000`

## 📚 Documentation

- **[Setup Guide](./docs/SETUP.md)** - Detailed installation and configuration instructions
- **[Architecture](./docs/ARCHITECTURE.md)** - System design and architecture overview
- **[API Documentation](./docs/API.md)** - Complete API endpoint reference
- **[Development Guide](./docs/DEVELOPMENT.md)** - Coding standards and contribution guidelines
- **[Database Schema](./docs/DATABASE.md)** - Database structure and relationships
- **[Deployment](./docs/DEPLOYMENT.md)** - Production deployment instructions

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `backend` directory using `.env.example` as a template:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=sacco_user
DB_PASSWORD=sacco_password
DB_NAME=sacco_db

# Server
NODE_ENV=development
PORT=5000

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRY=7d

# Frontend
CORS_ORIGIN=http://localhost:3000
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🛠️ Development Workflow

### Code Standards
- TypeScript with strict mode enabled
- ESLint for code quality
- Prettier for code formatting
- Jest for unit testing

### Linting & Formatting
```bash
# Lint code
npm run lint

# Format code
npm run format
```

### Database Migrations
```bash
cd backend

# Create a new migration
npm run migrate:create -- --name migration_name

# Run migrations
npm run migrate:latest

# Rollback migrations
npm run migrate:down
```

## 🐳 Docker Commands

```bash
# Start services in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild containers
docker-compose build

# Access database shell
docker-compose exec postgres psql -U sacco_user -d sacco_db

# Access backend shell
docker-compose exec backend sh
```

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Members
- `GET /api/members` - List all members
- `GET /api/members/:id` - Get member details
- `POST /api/members` - Create new member
- `PUT /api/members/:id` - Update member
- `DELETE /api/members/:id` - Delete member

### Loans
- `GET /api/loans` - List all loans
- `GET /api/loans/:id` - Get loan details
- `POST /api/loans` - Create loan application
- `PUT /api/loans/:id` - Update loan
- `POST /api/loans/:id/approve` - Approve loan
- `POST /api/loans/:id/disburse` - Disburse loan

### Transactions
- `GET /api/transactions` - List transactions
- `POST /api/transactions` - Create transaction
- `GET /api/transactions/:id` - Get transaction details

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt password encryption
- **Role-Based Access Control (RBAC)** - Fine-grained permissions
- **Input Validation** - Joi schema validation
- **CORS Protection** - Cross-origin request filtering
- **Helmet Security Headers** - HTTP security headers
- **Audit Logging** - Complete activity trail
- **Rate Limiting** - API rate limiting (implementable)

## 🚢 Production Deployment

### Prerequisites
- Ubuntu/Debian server
- Docker and Docker Compose
- Nginx reverse proxy
- SSL certificates (Let's Encrypt)

### Deployment Steps
See [Deployment Guide](./docs/DEPLOYMENT.md) for detailed instructions.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a Pull Request

### Code Review Guidelines
- All PRs require at least 1 approval
- All tests must pass
- Code must follow project standards
- Documentation must be updated

## 🐛 Issues & Bug Reporting

Found a bug? Please open an issue on GitHub with:
- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/logs if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 💬 Support & Community

- **Issues**: GitHub Issues for bug reports and feature requests
- **Discussions**: GitHub Discussions for questions and general topics
- **Documentation**: Check existing docs first for solutions
- **Email**: For security issues, email security@sacco-system.local

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core member management
- ✅ Loan processing engine
- ✅ Basic reporting

### Phase 2 (Q3 2026)
- 📅 Mobile app (React Native)
- 📅 SMS notifications
- 📅 Advanced analytics

### Phase 3 (Q4 2026)
- 📅 Mobile wallet integration
- 📅 AI-powered loan approval
- 📅 Multi-currency support

## 📞 Contact & Information

- **Project Manager**: Pato2516
- **Repository**: https://github.com/pato2516/sacco-management-system
- **Documentation**: See `/docs` folder
- **Issue Tracker**: GitHub Issues

---

**Last Updated**: July 2026  
**Version**: 1.0.0  
**Status**: Active Development

Made with ❤️ for SACCO Organizations Worldwide
